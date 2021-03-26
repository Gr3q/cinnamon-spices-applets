"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvCanada = void 0;
const commandRunner_1 = require("./commandRunner");
const logger_1 = require("./logger");
const sunCalc_1 = require("./sunCalc");
const utils_1 = require("./utils");
class EnvCanada {
    constructor(app) {
        this.needsApiKey = false;
        this.prettyName = "Environmental Canada";
        this.name = "EnvCanada";
        this.maxForecastSupport = 7;
        this.maxHourlyForecastSupport = 0;
        this.website = "https://weather.gc.ca/index_e.html";
        this.cityList = null;
        this.sunTimes = new sunCalc_1.SunCalc();
        this.app = app;
    }
    async GetWeather(loc) {
        if (this.cityList == null)
            this.cityList = await this.GetCityList();
        let city = this.FindClosestCity(loc.lat, loc.lon);
        let response = await commandRunner_1.SpawnProcessJson(["python3", this.app.AppletDir + "/../envCanadaBridge.py", "--url", `https://weather.gc.ca/rss/city/${city.key}_e.xml`]);
        if (!response.Success) {
            this.app.ShowError({ type: "hard", service: "yahoo", detail: "unknown", message: utils_1._("Could not get data from Environmental Canada,\n see Looking Glass log for errors") });
            logger_1.Log.Instance.Error("Environmental Canada API bridge call failed, error: " + response.ErrorData.Message);
            return null;
        }
        if (response.Data.error) {
            let error = response.Data.error;
            this.app.ShowError({ type: "hard", service: "yahoo", detail: "unknown", message: utils_1._("Could not get data from Environmental Canada,\n see Looking Glass log for errors") });
            logger_1.Log.Instance.Error("Environmental Canada API bridge call failed, error: " + error.message + error.data);
            return null;
        }
        return this.ParseWeather(response.Data, loc, city);
    }
    ParseWeather(data, loc, city) {
        let today = new Date(data.date * 1000);
        let sunTimes = this.sunTimes.getTimes(today, city.lat, city.lon);
        let isNight = utils_1.IsNight(sunTimes, today);
        let result = {
            location: {
                url: `https://www.weather.gc.ca/city/pages/${city.key}_metric_e.html`,
                city: city.name_e,
                country: "CA",
                distanceFrom: city.dist
            },
            condition: this.ResolveCondition(data.condition, isNight),
            coord: {
                lat: city.lat,
                lon: city.lon
            },
            date: today,
            humidity: data.humidity,
            pressure: data.pressure,
            temperature: utils_1.CelsiusToKelvin(data.temperature),
            wind: {
                degree: data.wind_dir,
                speed: data.wind_speed
            },
            sunrise: sunTimes.sunrise,
            sunset: sunTimes.sunset,
            forecasts: []
        };
        if (data.wind_chill != null) {
            result.extra_field = {
                name: utils_1._("Wind Chill"),
                type: "temperature",
                value: utils_1.CelsiusToKelvin(data.wind_chill)
            };
        }
        for (let index = 0; index < data.forecasts.length; index++) {
            const element = data.forecasts[index];
            let day = {
                condition: this.ResolveCondition(element.condition),
                date: new Date(element.date * 1000),
                temp_max: utils_1.CelsiusToKelvin(element.temp_max),
                temp_min: utils_1.CelsiusToKelvin(element.temp_min)
            };
            result.forecasts.push(day);
        }
        return result;
    }
    async GetCityList() {
        let response = await this.app.LoadAsync("https://weather.gc.ca/gps/js/cityLatLon.js");
        response = response.replace("var cities = ", "").replace(/{/g, "{\n").replace(/;/g, "");
        let lines = response.split("\n");
        for (let index = 0; index < lines.length; index++) {
            const element = lines[index];
            if (index == lines.length - 1) {
                lines[index] = element.replace(",", "");
            }
            if (!element.includes(":"))
                continue;
            let item = element.split(":");
            lines[index] = `"${item[0]}":${item[1]}`;
        }
        let jsonString = lines.join("\n");
        let json = JSON.parse(jsonString);
        for (let index = 0; index < json.length; index++) {
            const element = json[index];
            json[index].lat = parseFloat(element.lat);
            json[index].lon = parseFloat(element.lon);
            json[index].dist = Infinity;
        }
        return json;
    }
    FindClosestCity(lat, lon) {
        let result = null;
        for (let index = 0; index < this.cityList.length; index++) {
            const element = this.cityList[index];
            if (result == null) {
                result = element;
                continue;
            }
            let dist = utils_1.GetDistance(lat, lon, element.lat, element.lon);
            if (dist < result.dist) {
                result = Object.assign({}, element);
                result.dist = dist;
            }
        }
        return result;
    }
    ResolveCondition(condition, isNight = false) {
        condition = condition.toLowerCase();
        switch (condition) {
            case "sunny":
                return {
                    customIcon: isNight ? "night-clear-symbolic" : "day-sunny-symbolic",
                    icons: isNight ? ["weather-clear-night"] : ["weather-clear"],
                    main: utils_1._("Sunny"),
                    description: utils_1._("Sunny"),
                };
            case "clear":
                return {
                    customIcon: isNight ? "night-clear-symbolic" : "day-sunny-symbolic",
                    icons: isNight ? ["weather-clear-night"] : ["weather-clear"],
                    main: utils_1._("Clear"),
                    description: utils_1._("Clear"),
                };
            case "mainly sunny":
                return {
                    customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
                    icons: isNight ? ["weather-few-clouds-night", "weather-clouds-night"] : ["weather-few-clouds", "weather-clouds"],
                    main: utils_1._("Mostly Sunny"),
                    description: utils_1._("Mostly Sunny"),
                };
            case "increasing cloudiness":
            case "partly cloudy":
            case "a mix of sun and cloud":
                return {
                    customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
                    icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
                    main: utils_1._("Partly Cloudy"),
                    description: utils_1._("Partly Cloudy"),
                };
            case "mainly cloudy":
            case "mostly cloudy":
                return {
                    customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
                    icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
                    main: utils_1._("Mostly Cloudy"),
                    description: utils_1._("Mostly Cloudy"),
                };
            case "cloudy periods":
                return {
                    customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
                    icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
                    main: utils_1._("Cloudy periods"),
                    description: utils_1._("Cloudy periods"),
                };
            case "cloudy":
                return {
                    customIcon: "cloudy-symbolic",
                    icons: ["weather-overcast", "weather-clouds", "weather-many-clouds"],
                    main: utils_1._("Cloudy"),
                    description: utils_1._("Cloudy"),
                };
            case "light rainshower":
                return {
                    customIcon: isNight ? "night-alt-rain-symbolic" : "day-rain-symbolic",
                    icons: ["weather-snow"],
                    main: utils_1._("Light rain"),
                    description: utils_1._("Light rain"),
                };
            case "light snow":
                return {
                    customIcon: isNight ? "night-alt-snow-symbolic" : "day-snow-symbolic",
                    icons: ["weather-snow"],
                    main: utils_1._("Light snow"),
                    description: utils_1._("Light snow"),
                };
            case "snow":
                return {
                    customIcon: "snow-symbolic",
                    icons: ["weather-snow"],
                    main: utils_1._("Snow"),
                    description: utils_1._("Snow"),
                };
            case "rain showers or flurries":
            case "flurries or rain showers":
                return {
                    customIcon: "rain-mix-symbolic",
                    icons: ["weather-rain", "weather-snow"],
                    main: utils_1._("Flurries or rain showers"),
                    description: utils_1._("Flurries or rain showers"),
                };
            case "periods of rain":
            case "showers":
                return {
                    customIcon: "showers-symbolic",
                    icons: ["weather-showers", "weather-showers-scattered", "weather-rain"],
                    main: utils_1._("Showers"),
                    description: utils_1._("Showers"),
                };
            case "periods of snow or rain":
                return {
                    customIcon: isNight ? "night-alt-rain-mix-symbolic" : "day-rain-mix-symbolic",
                    icons: isNight ? ["weather-snow-rain", "weather-snow-scattered-night", "weather-snow-night", "weather-snow"] : ["weather-snow-rain", "weather-snow-scattered-day", "weather-snow-day", "weather-snow"],
                    main: utils_1._("Snow or rain"),
                    description: utils_1._("Snow or rain"),
                };
            case "chance of showers":
                return {
                    customIcon: "showers-symbolic",
                    icons: ["weather-showers", "weather-showers-scattered", "weather-rain"],
                    main: utils_1._("Showers"),
                    description: utils_1._("Chance of showers"),
                };
            case "chance of flurries":
                return {
                    customIcon: isNight ? "night-snow-symbolic" : "day-snow-symbolic",
                    icons: [isNight ? "weather-snow-night" : "weather-snow-day", "weather-snow"],
                    main: utils_1._("Flurries"),
                    description: utils_1._("Chance of snow flurries"),
                };
            default:
                logger_1.Log.Instance.Error(`Icons for condition '${condition}' was not implemented.`);
                return {
                    customIcon: "refresh-alt-symbolic",
                    icons: [],
                    main: utils_1._("Unknown"),
                    description: utils_1._("Unknown"),
                };
        }
    }
}
exports.EnvCanada = EnvCanada;

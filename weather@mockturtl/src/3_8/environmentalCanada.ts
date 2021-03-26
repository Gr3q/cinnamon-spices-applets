import { SpawnProcessJson } from "./commandRunner";
import { Services } from "./config";
import { Log } from "./logger";
import { WeatherApplet } from "./main";
import { SunCalc } from "./sunCalc";
import { Condition, ForecastData, LocationData, WeatherData, WeatherProvider } from "./types";
import { CelsiusToKelvin, GetDistance, IsNight, _ } from "./utils";

export class EnvCanada implements WeatherProvider {
	needsApiKey: boolean = false;
	prettyName: string = "Environmental Canada";
	name: Services = "EnvCanada";
	maxForecastSupport: number = 7;
	maxHourlyForecastSupport: number = 0;
	website: string = "https://weather.gc.ca/index_e.html";

	app: WeatherApplet;
	cityList: City[] = null;

	sunTimes = new SunCalc();

	constructor(app: WeatherApplet) {
		this.app = app;
	}

	async GetWeather(loc: LocationData): Promise<WeatherData> {
		if (this.cityList == null)
			this.cityList = await this.GetCityList();
		let city = this.FindClosestCity(loc.lat, loc.lon);
		let response = await SpawnProcessJson<CanadaBridgePayload>(["python3", this.app.AppletDir + "/../envCanadaBridge.py", "--url", `https://weather.gc.ca/rss/city/${city.key}_e.xml`]);

		if (!response.Success) {
			this.app.ShowError({ type: "hard", service: "yahoo", detail: "unknown", message: _("Could not get data from Environmental Canada,\n see Looking Glass log for errors") })
			Log.Instance.Error("Environmental Canada API bridge call failed, error: " + response.ErrorData.Message);
			return null;
		}

		if ((response.Data as any).error) {
			let error = (response.Data as any).error;
			this.app.ShowError({ type: "hard", service: "yahoo", detail: "unknown", message: _("Could not get data from Environmental Canada,\n see Looking Glass log for errors") })
			Log.Instance.Error("Environmental Canada API bridge call failed, error: " + error.message + error.data);
			return null;
		}
		return this.ParseWeather(response.Data, loc, city);
	}

	ParseWeather(data: CanadaBridgePayload, loc: LocationData, city: City): WeatherData {
		let today = new Date(data.date * 1000);
		let sunTimes = this.sunTimes.getTimes(today, city.lat, city.lon);
		let isNight = IsNight(sunTimes, today)
		let result: WeatherData = {
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
			temperature: CelsiusToKelvin(data.temperature),
			wind: {
				degree: data.wind_dir,
				speed: data.wind_speed
			},
			sunrise: sunTimes.sunrise,
			sunset: sunTimes.sunset,
			forecasts: []
		}

		if (data.wind_chill != null) {
			result.extra_field = {
				name: _("Wind Chill"),
				type: "temperature",
				value: CelsiusToKelvin(data.wind_chill)
			}
		}

		for (let index = 0; index < data.forecasts.length; index++) {
			const element = data.forecasts[index];
			let day: ForecastData = {
				condition: this.ResolveCondition(element.condition),
				date: new Date(element.date * 1000),
				temp_max: CelsiusToKelvin(element.temp_max),
				temp_min: CelsiusToKelvin(element.temp_min)
			}
			result.forecasts.push(day);
		}

		return result;
	}

	/**
	 * Gets City list from downloaded JS file, transforms it into JSON and loads it in.
	 */
	async GetCityList(): Promise<City[]> {
		let response = await this.app.LoadAsync("https://weather.gc.ca/gps/js/cityLatLon.js");
		// Format in a way where we can process it later on
		response = response.replace("var cities = ", "").replace(/{/g, "{\n").replace(/;/g, "");
		let lines = response.split("\n")
		for (let index = 0; index < lines.length; index++) {
			const element = lines[index];
			// Remove extra comma after all items in array
			if (index == lines.length - 1) {
				lines[index] = element.replace(",", "");
			}

			// We only care about key-value pairs
			if (!element.includes(":"))
				continue;

			// Add quotes to keys
			let item = element.split(":");
			lines[index] = `"${item[0]}":${item[1]}`;
		}

		let jsonString = lines.join("\n");
		let json = JSON.parse(jsonString);
		// Convert to numbers
		for (let index = 0; index < json.length; index++) {
			const element = json[index];
			json[index].lat = parseFloat(element.lat);
			json[index].lon = parseFloat(element.lon);
			json[index].dist = Infinity;
		}
		return json;
	}

	FindClosestCity(lat: number, lon: number): City {
		let result: City = null;
		for (let index = 0; index < this.cityList.length; index++) {
			const element = this.cityList[index];
			if (result == null) {
				result = element;
				continue;
			}
			let dist = GetDistance(lat, lon, element.lat, element.lon);
			if (dist < result.dist) {
				// make sure we don't modify original city list by accident
				result = { ...element };
				result.dist = dist;
			}
		}
		return result;
	}

	ResolveCondition(condition: string, isNight: boolean = false): Condition {
		condition = condition.toLowerCase();
		switch (condition) {
			case "sunny":
				return {
					customIcon: isNight ? "night-clear-symbolic" : "day-sunny-symbolic",
					icons: isNight ? ["weather-clear-night"] : ["weather-clear"],
					main: _("Sunny"),
					description: _("Sunny"),
				}
			case "clear":
				return {
					customIcon: isNight ? "night-clear-symbolic" : "day-sunny-symbolic",
					icons: isNight ? ["weather-clear-night"] : ["weather-clear"],
					main: _("Clear"),
					description: _("Clear"),
				}
			case "mainly sunny":
				return {
					customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
					icons: isNight ? ["weather-few-clouds-night", "weather-clouds-night"] : ["weather-few-clouds", "weather-clouds"],
					main: _("Mostly Sunny"),
					description: _("Mostly Sunny"),
				}
			case "increasing cloudiness":
			case "partly cloudy":
			case "a mix of sun and cloud":
				return {
					customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
					icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
					main: _("Partly Cloudy"),
					description: _("Partly Cloudy"),
				}
			case "mainly cloudy":
			case "mostly cloudy":
				return {
					customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
					icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
					main: _("Mostly Cloudy"),
					description: _("Mostly Cloudy"),
				}
			case "cloudy periods":
				return {
					customIcon: isNight ? "night-alt-cloudy-symbolic" : "day-cloudy-symbolic",
					icons: isNight ? ["weather-few-clouds-night"] : ["weather-few-clouds"],
					main: _("Cloudy periods"),
					description: _("Cloudy periods"),
				}
			case "cloudy":
				return {
					customIcon: "cloudy-symbolic",
					icons: ["weather-overcast", "weather-clouds", "weather-many-clouds"],
					main: _("Cloudy"),
					description: _("Cloudy"),
				}
			case "light rainshower":
				return {
					customIcon: isNight ? "night-alt-rain-symbolic": "day-rain-symbolic",
					icons: ["weather-snow"],
					main: _("Light rain"),
					description: _("Light rain"),
				}
			case "light snow":
				return {
					customIcon: isNight ? "night-alt-snow-symbolic": "day-snow-symbolic",
					icons: ["weather-snow"],
					main: _("Light snow"),
					description: _("Light snow"),
				}
			case "snow":
				return {
					customIcon: "snow-symbolic",
					icons: ["weather-snow"],
					main: _("Snow"),
					description: _("Snow"),
				}
			case "rain showers or flurries":
			case "flurries or rain showers":
				return {
					customIcon: "rain-mix-symbolic",
					icons: ["weather-rain", "weather-snow"],
					main: _("Flurries or rain showers"),
					description: _("Flurries or rain showers"),
				}
			case "periods of rain":
			case "showers":
				return {
					customIcon: "showers-symbolic",
					icons: ["weather-showers", "weather-showers-scattered", "weather-rain"],
					main: _("Showers"),
					description: _("Showers"),
				}
			case "periods of snow or rain":
				return {
					customIcon: isNight ? "night-alt-rain-mix-symbolic": "day-rain-mix-symbolic",
					icons: isNight ? ["weather-snow-rain",  "weather-snow-scattered-night", "weather-snow-night", "weather-snow"] : ["weather-snow-rain",  "weather-snow-scattered-day", "weather-snow-day", "weather-snow"],
					main: _("Snow or rain"),
					description: _("Snow or rain"),
				}
			case "chance of showers":
				return {
					customIcon: "showers-symbolic",
					icons: ["weather-showers", "weather-showers-scattered", "weather-rain"],
					main: _("Showers"),
					description: _("Chance of showers"),
				}
			case "chance of flurries":
				return {
					customIcon: isNight ? "night-snow-symbolic" : "day-snow-symbolic",
					icons: [isNight ? "weather-snow-night" : "weather-snow-day", "weather-snow"],
					main: _("Flurries"),
					description: _("Chance of snow flurries"),
				}
			default:
				Log.Instance.Error(`Icons for condition '${condition}' was not implemented.`);
				return {
					customIcon: "refresh-alt-symbolic",
					icons: [],
					main: _("Unknown"),
					description: _("Unknown"),
				}
		}
	}
}

interface City {
	key: string;
	name_e: string;
	name_f: string;
	lat: number;
	lon: number;
	/** in metres */
	dist: number;
}

interface CanadaBridgePayload {
	url: string;
	condition: string;
	date: number;
	temperature: number;
	pressure: number;
	humidity: number;
	wind_speed: number;
	wind_dir: number;
	wind_chill?: number;
	forecasts: CanadaBridgeForecastPayload[]
}

interface CanadaBridgeForecastPayload {
	date: number;
	condition: string;
	temp_max: number;
	temp_min: number;
}
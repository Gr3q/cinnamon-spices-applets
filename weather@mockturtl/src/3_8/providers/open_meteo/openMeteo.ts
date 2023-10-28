import { DateTime } from "luxon";
import { Services } from "../../config";
import { HTTPParams } from "../../lib/httpLib";
import { Logger } from "../../lib/logger";
import { Condition, HourlyForecastData, LocationData, PrecipitationType, WeatherData } from "../../types";
import { CelsiusToKelvin, Zip, _ } from "../../utils";
import { BaseProvider } from "../BaseProvider";
import { OpenMeteoPayload } from "./types";
import { getTimes } from "suncalc";

export class OpenMeteo extends BaseProvider {
	public override needsApiKey: boolean = false;
	public override prettyName: string = _("Open-Meteo");
	public override name: Services = "OpenMeteo";
	public override maxForecastSupport: number = 16;
	public override maxHourlyForecastSupport: number = 300;
	public override website: string = "https://open-meteo.com/";
	public override remainingCalls: number | null = null;
	public override supportHourlyPrecipChance: boolean = true;
	public override supportHourlyPrecipVolume: boolean = true;


	private baseUrl: string = "https://api.open-meteo.com/v1/forecast";

	public override async GetWeather(loc: LocationData): Promise<WeatherData | null> {
		const params: HTTPParams = {
			latitude: loc.lat.toString(),
			longitude: loc.lon.toString(),
			hourly: "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,surface_pressure,is_day",
			daily: "weathercode,temperature_2m_max,temperature_2m_min",
			current_weather: "true",
			windspeed_unit: "ms",
			timeformat: "unixtime",
			timezone: "auto",
			forecast_days: "16",
			models: "best_match"
		};

		const result = await this.app.LoadJsonAsync<OpenMeteoPayload>(this.baseUrl, params);
		if (!result)
			return null;

		return this.ParseWeatherData(result);
	}

	private ParseWeatherData(data: OpenMeteoPayload): WeatherData | null {
		const time = DateTime.fromSeconds(data.current_weather.time, { zone: data.timezone });
		const currentHourIndex = data.hourly.time.findIndex(t => t > data.current_weather.time) - 1;
		const sunTimes = getTimes(time.toJSDate(), data.latitude, data.longitude, data.elevation);
		try {
			const result: WeatherData = {
				date: time,
				coord: {
					lat: data.latitude,
					lon: data.longitude
				},
				temperature: CelsiusToKelvin(data.current_weather.temperature),
				sunrise: DateTime.fromJSDate(sunTimes.sunrise).setZone(data.timezone),
				sunset: DateTime.fromJSDate(sunTimes.sunset).setZone(data.timezone),
				location: {
					city: undefined,
					country: undefined,
					timeZone: data.timezone,
					tzOffset: data.utc_offset_seconds,
					// TODO: maybe there is a better url to use here?
					url: "https://open-meteo.com/"
				},
				wind: {
					speed: data.current_weather.windspeed,
					degree: data.current_weather.winddirection
				},
				condition: this.ResolveCondition(data.current_weather.weathercode, data.current_weather.is_day),
				humidity: data.hourly.relativehumidity_2m[currentHourIndex],
				pressure: data.hourly.surface_pressure[currentHourIndex],
				dewPoint: CelsiusToKelvin(data.hourly.dewpoint_2m[currentHourIndex]),
				forecasts: [],
				hourlyForecasts: []
			}

			for (const [time, weathercode, temp_max, temp_min] of Zip(data.daily.time, data.daily.weathercode, data.daily.temperature_2m_max, data.daily.temperature_2m_min)) {
				const date = DateTime.fromSeconds(time, { zone: data.timezone });
				result.forecasts.push({
					date: date,
					condition: this.ResolveCondition(weathercode),
					temp_max: CelsiusToKelvin(temp_max),
					temp_min: CelsiusToKelvin(temp_min)
				})
			}

			const hours: HourlyForecastData[] = [];
			for (let i = currentHourIndex; i < data.hourly.time.length; i++) {
				const time = data.hourly.time[i];
				const temperature_2m = data.hourly.temperature_2m[i];
				const precipitation_probability = data.hourly.precipitation_probability[i];
				const precipitation = data.hourly.precipitation[i];
				const rain = data.hourly.rain[i];
				const showers = data.hourly.showers[i];
				const snowfall = data.hourly.snowfall[i];
				const weathercode = data.hourly.weathercode[i];
				const is_day = data.hourly.is_day[i];

				const hourTime = DateTime.fromSeconds(time, { zone: data.timezone });
				const hour: HourlyForecastData = {
					date: hourTime,
					condition: this.ResolveCondition(weathercode, is_day),
					temp: CelsiusToKelvin(temperature_2m),
				}

				const types = ["rain", "rain", "snow"] as PrecipitationType[];
				const precipValues = [rain, showers, snowfall];

				if (precipitation_probability > 0.1) {
					const biggestPrecipitationIndex = precipValues.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
					hour.precipitation = {
						type: types[biggestPrecipitationIndex],
						chance: precipitation_probability,
						volume: types[biggestPrecipitationIndex] == "snow" ? snowfall * 10 :  precipitation,
					}
				}

				hours.push(hour);
			}

			result.hourlyForecasts = hours;
			return result;
		}
		catch (err) {
			if (err instanceof Error)
				Logger.Error("Open-Meteo Weather Parsing error: " + err, err);

			this.app.ShowError({
				type: "soft",
				service: "OpenMeteo",
				detail: "unusual payload",
				message: _("Failed to Process Weather Info")
			})
			return null;
		}
	}

	private ResolveCondition(weathercode: number, is_day: boolean = true): Condition {
		switch (weathercode) {
			case 0:
				return {
					main: _("Clear"),
					description: _("Clear Sky"),
					icons: is_day ? ["weather-clear"] : ["weather-clear-night"],
					customIcon: is_day ? "day-sunny-symbolic" : "night-clear-symbolic"
				}
			case 1:
				return {
					main: _("Partly Cloudy"),
					description: _("Partly Cloudy"),
					icons: is_day ? ["weather-few-clouds"] : ["weather-few-clouds-night"],
					customIcon: is_day ? "day-cloudy-symbolic" : "night-alt-cloudy-symbolic"
				}
			case 2:
				return {
					main: _("Cloudy"),
					description: _("Cloudy"),
					icons: ["weather-clouds","weather-many-clouds", "weather-overcast", "weather-few-clouds"],
					customIcon: "cloudy-symbolic"
				}
			case 3:
				return {
					main: _("Overcast"),
					description: _("Overcast"),
					icons: ["weather-overcast"],
					customIcon: "cloudy-symbolic"
				}
			case 45:
				return {
					main: _("Fog"),
					description: _("Fog"),
					icons: ["weather-fog"],
					customIcon: "fog-symbolic"
				}
			case 48:
				return {
					main: _("Freezing Fog"),
					description: _("Freezing Fog"),
					icons: ["weather-fog"],
					customIcon: "fog-symbolic"
				}
			case 51:
				return {
					main: _("Light Drizzle"),
					description: _("Light Drizzle"),
					icons: is_day ? ["weather-showers-scattered", "weather-rain", "weather-freezing-rain"] : ["weather-showers-scattered-night", "weather-rain", "weather-freezing-rain"],
					customIcon: is_day ? "day-sprinkle-symbolic" : "night-alt-sprinkle-symbolic"
				}
			case 53:
				return {
					main: _("Drizzle"),
					description: _("Drizzle"),
					icons: is_day ? ["weather-showers-scattered", "weather-rain", "weather-freezing-rain"] : ["weather-showers-scattered-night", "weather-rain", "weather-freezing-rain"],
					customIcon: "sprinkle-symbolic"
				}
			case 55:
				return {
					main: _("Heavy Drizzle"),
					description: _("Heavy Drizzle"),
					icons: is_day ? ["weather-showers-scattered", "weather-rain", "weather-freezing-rain"] : ["weather-showers-scattered-night", "weather-rain", "weather-freezing-rain"],
					customIcon: "sprinkle-symbolic"
				}
			case 56:
				return {
					main: _("Light Freezing Drizzle"),
					description: _("Light Freezing Drizzle"),
					icons: is_day ? ["weather-freezing-rain", "weather-showers-scattered", "weather-rain"] : ["weather-freezing-rain", "weather-showers-scattered-night", "weather-rain"],
					customIcon: is_day ? "day-sprinkle-symbolic" : "night-alt-sprinkle-symbolic"
				}
			case 57:
				return {
					main: _("Freezing Drizzle"),
					description: _("Freezing Drizzle"),
					icons: ["weather-freezing-rain", "weather-showers-scattered", "weather-rain"],
					customIcon: "sprinkle-symbolic"
				}
			case 61:
				return {
					main: _("Light Rain"),
					description: _("Light Rain"),
					icons: is_day ? ["weather-showers-scattered", "weather-rain"] : ["weather-showers-scattered-night", "weather-rain"],
					customIcon: is_day ? "day-rain-symbolic" : "night-alt-rain-symbolic"
				}
			case 63:
				return {
					main: _("Rain"),
					description: _("Rain"),
					icons: ["weather-rain", "weather-freezing-rain", "weather-showers", "weather-showers-scattered"],
					customIcon: "rain-symbolic"
				}
			case 65:
				return {
					main: _("Heavy Rain"),
					description: _("Heavy Rain"),
					icons: ["weather-rain", "weather-freezing-rain", "weather-showers", "weather-showers-scattered"],
					customIcon: "rain-symbolic"
				}
			case 66:
				return {
					main: _("Light Freezing Rain"),
					description: _("Light Freezing Rain"),
					icons: is_day ? ["weather-freezing-rain", "weather-showers-scattered", "weather-rain"] : ["weather-freezing-rain", "weather-showers-scattered-night", "weather-rain"],
					customIcon: is_day ? "day-rain-symbolic" : "night-alt-rain-symbolic"
				}
			case 67:
				return {
					main: _("Freezing Rain"),
					description: _("Freezing Rain"),
					icons: ["weather-freezing-rain", "weather-showers-scattered", "weather-rain"],
					customIcon: "rain-symbolic"
				}
			case 71:
				return {
					main: _("Light Snow"),
					description: _("Light Snow"),
					icons: is_day ? ["weather-snow-scattered-day", "weather-snow-scattered", "weather-snow",] : ["weather-snow-scattered-night", "weather-snow"],
					customIcon: "snow-symbolic"
				}
			case 73:
				return {
					main: _("Snow"),
					description: _("Snow"),
					icons: ["weather-snow", "weather-snow-scattered"],
					customIcon: "snow-symbolic"
				}
			case 75:
				return {
					main: _("Heavy Snow"),
					description: _("Heavy Snow"),
					icons: ["weather-snow", "weather-snow-scattered"],
					customIcon: "snow-symbolic"
				}
			case 77:
				return {
					main: _("Snow grains"),
					description: _("Snow grains"),
					icons: ["weather-snow", "weather-snow-scattered", "weather-rain", "weather-showers-scattered"],
					customIcon: "rain-mix-symbolic"
				}
			case 80:
				return {
					main: _("Light Rain Shower"),
					description: _("Light Rain Shower"),
					icons: is_day ? ["weather-showers-scattered", "weather-rain"] : ["weather-showers-scattered-night", "weather-rain"],
					customIcon: is_day ? "day-showers-symbolic" : "night-alt-showers-symbolic"
				}
			case 81:
				return {
					main: _("Rain Shower"),
					description: _("Rain Shower"),
					icons: ["weather-showers", "weather-rain"],
					customIcon: "showers-symbolic"
				}
			case 82:
				return {
					main: _("Heavy Rain Shower"),
					description: _("Heavy Rain Shower"),
					icons: ["weather-showers", "weather-rain"],
					customIcon: "showers-symbolic"
				}
			default:
				return {
					main: "Test",
					description: "Test",
					icons: [],
					customIcon: "alien-symbolic"
				}
		}
	}
}
import { DateTime } from "luxon";
import { Services } from "../../config";
import { HTTPParams } from "../../lib/httpLib";
import { Logger } from "../../lib/logger";
import { Condition, LocationData, WeatherData } from "../../types";
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
				humidity: data.hourly.relativehumidity_2m[0],
				pressure: data.hourly.surface_pressure[0],
				dewPoint: CelsiusToKelvin(data.hourly.dewpoint_2m[0]),
				forecasts: []
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
import { DateTime } from "luxon";
import { Services } from "../config";
import { HTTPParams } from "../lib/httpLib";
import { ForecastData, HourlyForecastData, LocationData, WeatherData } from "../types";
import { CelsiusToKelvin, _ } from "../utils";
import { BaseProvider } from "./BaseProvider";



export class MeteoFrance extends BaseProvider {
    public needsApiKey: boolean = false;
    public prettyName: string = _("Meteo-France");
    public name: Services = "Meteo-France";
    public maxForecastSupport: number = 16;
    public maxHourlyForecastSupport: number = 100; //?
    public website: string = "https://meteofrance.com/";
    public remainingCalls: number | null = null;


    private readonly baseURL: string = "https://webservice.meteofrance.com/";
    private readonly key: string = "__Wj7dVSTjV9YGu1guveLyDq0g7S7TfTjaHBTPTpO0kj8__";

    
    public GetWeather = async (loc: LocationData): Promise<WeatherData | null> => {
        const params = this.ConstructParams(loc);
        const result = await this.app.LoadJsonAsync<ForecastPayload>(this.baseURL + "forecast", params);

        if (result == null)
            return null;
        // const rainResult = await this.app.LoadJsonAsync<RainPayload>(this.baseURL + "rain", params);
        const timeZone = result.position.timezone;
        return {
            location: {
                city: result.position.name,
                country: result.position.country,
                timeZone: timeZone,
                url: this.website,
            },
            coord: {
                lat: result.position.lat,
                lon: result.position.lon,
            },
            date: DateTime.fromSeconds(result.updated_on, { zone: timeZone }),
            dewPoint: null,
            sunrise: DateTime.fromSeconds(result.daily_forecast[0].sun.rise, { zone: timeZone }),
            sunset: DateTime.fromSeconds(result.daily_forecast[0].sun.set, { zone: timeZone }),
            condition: {
                main: result.forecast[0].weather.desc!,
                icons: ["weather-severe-alert"],
                customIcon: "refresh-symbolic",
                description: result.forecast[0].weather.desc!
            },
            wind: {
                speed: result.forecast[0].wind.speed,
                degree: result.forecast[0].wind.direction,
            },
            temperature: CelsiusToKelvin(result.forecast[0].T.value),
            humidity: result.daily_forecast[0].humidity.max,
            pressure: result.forecast[0].sea_level,
            hourlyForecasts: this.GenerateHourlyWeather(result),
            forecasts: this.GenerateDailyWeather(result),
        }
    }

    private GenerateDailyWeather(data: ForecastPayload): ForecastData[] {
        const timeZone = data.position.timezone;
        const result: ForecastData[] = [];
        for (const day of data.daily_forecast) {
            if (day.weather12H == null)
                break;

            result.push({
                date: DateTime.fromSeconds(day.dt, { zone: timeZone }),
                condition: {
                    main: day.weather12H.desc,
                    icons: ["weather-severe-alert"],
                    customIcon: "refresh-symbolic",
                    description: day.weather12H.desc
                },
                temp_max: CelsiusToKelvin(day.T.max),
                temp_min: CelsiusToKelvin(day.T.min),
            })
        }

        return result;
    }

    private GenerateHourlyWeather(data: ForecastPayload): HourlyForecastData[] {
        const timeZone = data.position.timezone;
        const result: HourlyForecastData[] = [];
        for (const hour of data.forecast) {
            if (hour.T.value == null || hour.weather.desc == null)
                break;
            result.push({
                date: DateTime.fromSeconds(hour.dt, { zone: timeZone }),
                temp: CelsiusToKelvin(hour.T.value),
                condition: {
                    main: hour.weather.desc,
                    icons: ["weather-severe-alert"],
                    customIcon: "refresh-symbolic",
                    description: hour.weather.desc
                },
            })
        }

        return result;
    }

    private ConstructParams(loc: LocationData): HTTPParams {
        return {
            token: this.key,
            lat: loc.lat,
            lon: loc.lon,
            lang: this.app.config.Language ?? "fr",
        };
    }
}

interface ForecastPayload {
    position: PositionInfo;
    /** Unix timestamp */
    updated_on: number;
    daily_forecast: ForecastInfo[];
    /** Hourly forecast */
    forecast: HourlyForecastInfo[];
    probability_forecast: ProbabilityForecastInfo[];
}

interface RainPayload {
    position: PositionInfo;
    /** Unix timestamp */
    updated_on: number;
    forecast: RainInfo[];
}

interface PositionInfo {
    lat: number;
    lon: number;
    alti: number;
    name: string;
    country: string;
    dept: string | null;
    rain_product_available: 0 | 1,
    /** IANA timezone */
    timezone: string;
    insee: number;
    bulletin_cote: number;
}

interface ForecastInfo {
    /** Unix timestamp */
    dt: number;
    /** Temperature */
    T: {
        /** Celsius */
        min: number;
        /** Celsius */
        max: number;
        /** Celsius */
        sea: number;
    }
    humidity: {
        /** Percentage */
        min: number;
        /** Percentage */
        max: number;
    }
    precipitation: {
        /** mm? */
        "24h": number;
    }
    uv: number;
    weather12H?: {
        icon: string;
        desc: string;
    }
    sun: {
        /** Unix timestamp */
        rise: number;
        /** Unix timestamp */
        set: number;
    }
}

interface HourlyForecastInfo {
    /** Unix timestamp */
    dt: number;
    /** Temperature */
    T: {
        /** Celsius */
        value: number | null;
        /** Celsius */
        windchill: number | null;
    }
    /** Percentage */
    humidity: number | null;
    /** hPa pressure */
    sea_level: number | null;
    wind: {
        /** ?? */
        speed: number | null;
        /** ?? */
        gust: number | null;
        /** Nautical degrees */
        direction: number | null;
        icon: string | null;
    }
    rain?: {
        /** mm? */
        "1h"?: number | null;
        /** mm? */
        "6h"?: number | null;
    }
    snow?: {
        /** mm? */
        "1h"?: number | null;
        /** mm? */
        "6h"?: number | null;
    }
    iso0: number | null;
    "rain snow limit": string | null;
    /** Percent */
    clouds: number | null;
    weather: {
        icon: string | null;
        desc: string | null;
    }
}

interface ProbabilityForecastInfo {
    /** Unix timestamp */
    dt: number;
    rain: {
        "3h": number | null;
        "6h": number | null;
    }
    snow: {
        "3h": number | null;
        "6h": number | null;
    }
    freezing: boolean;
}

interface RainInfo {
    /** Unix timestamp */
    dt: number;
    /** ?? */
    rain: number;
    /** ?? */
    desc: string;
}
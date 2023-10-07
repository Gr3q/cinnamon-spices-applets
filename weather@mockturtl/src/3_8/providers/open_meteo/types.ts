export interface OpenMeteoPayload {
	latitude: number;
	longitude: number;
	generationtime_ms: number;
	utc_offset_seconds: number;
	timezone: string;
	timezone_abbreviation: string;
	elevation: number;
	current_weather_interval_seconds: number;
	current_weather: OpenMeteoCurrentWeatherData;
	hourly: OpenMeteoHourlyForecastData;
	daily: OpenMeteoDailyForecastData;
}

export interface OpenMeteoCurrentWeatherData {
	/** Unix timestamp */
	time: number;
	temperature: number;
	windspeed: number;
	winddirection: number;
	is_day: boolean;
	weathercode: number;
}

export interface OpenMeteoHourlyForecastData {
	time: number[];
	temperature_2m: number[];
	relativehumidity_2m: number[];
	dewpoint_2m: number[];
	apparent_temperature: number[];
	precipitation_probability: number[];
	precipitation: number[];
	rain: number[];
	showers: number[];
	snowfall: number[];
	weathercode: number[];
	surface_pressure: number[];
	is_day: boolean[];
}

export interface OpenMeteoDailyForecastData {
	time: number[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	weathercode: number[];
}
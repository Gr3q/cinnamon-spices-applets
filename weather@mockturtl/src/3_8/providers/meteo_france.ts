import { Services } from "../config";
import { LocationData, WeatherData } from "../types";
import { _ } from "../utils";
import { BaseProvider } from "./BaseProvider";



export class MeteoFrance extends BaseProvider {
    public needsApiKey: boolean = false;
    public prettyName: string = _("Meteo-France");
    public name: Services = "Meteo-France";
    public maxForecastSupport: number = 0;
    public maxHourlyForecastSupport: number = 0;
    public website: string = "https://meteofrance.com/";
    public remainingCalls: number | null = null;
    public GetWeather(loc: LocationData): Promise<WeatherData | null> {
        throw new Error("Method not implemented.");
    }

}
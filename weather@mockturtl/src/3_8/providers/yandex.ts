import { Services } from "../config";
import { HttpError, HttpLib } from "../lib/httpLib";
import { WeatherApplet } from "../main";
import { LocationData, WeatherData, WeatherProvider } from "../types";
import { _ } from "../utils";

export class Yandex implements WeatherProvider {
	needsApiKey: boolean = true;
	prettyName: string = _("Yandex");
	name: Services = "Yandex";
	maxForecastSupport: number = 0;
	maxHourlyForecastSupport: number = 0;
	website: string = "https://yandex.com/weather/region?via=moc";

	private app: WeatherApplet;

	private supportedLangs: SupportedLangs = {
		"en": "en_US",
		"ru": "ru_RU",
		"uk": "uk_UA",
		"be": "be_BY",
		"kk": "kk_KZ",
		"tr": "tr_TR"
	}

	constructor(app: WeatherApplet) {
		this.app = app;
	}

	public async GetWeather(loc: LocationData): Promise<WeatherData | null> {
		let response = await this.app.LoadJsonAsync<YandexPayload>(
			"https://api.weather.yandex.ru/v2/informers",
			{ lat: loc.lat, lon: loc.lon, lang: this.getLang(this.app.config.currentLocale)},
			this.HandleHttpErrors,
			{ "X-Yandex-API-Key": this.app.config.ApiKey }
		);
		global.log(response);

		return null;
	}

	private HandleHttpErrors = (error: HttpError): boolean => {
		if (error?.code == 403) {
			this.app.ShowError({
				type: "hard",
				userError: true,
				detail: "bad key",
				message: _("Please make sure you entered the API key correctly")
			})
			return false;
		}
		return true;
	}

	private getLang(locale: string | null): string {
		if (locale == null)
			return this.supportedLangs["en"];

		if (this.supportedLangs[locale] != null)
			return this.supportedLangs[locale];
		
		return this.supportedLangs["en"];
	}
}

interface YandexPayload {

}

interface SupportedLangs {
	en: string;
	ru: string;
	uk: string;
	be: string;
	kk: string;
	tr: string;
	[key: string]: string;
}
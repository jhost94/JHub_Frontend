import { TranslateService } from "@ngx-translate/core";
import { CONSTANTS } from "src/constants";

export class LocaleControler {
  currentLang: string;
  browserDefaultLang: string;
  availableLangs: string[];

  constructor(private translatorService: TranslateService){
    this.currentLang = translatorService.getDefaultLang();
    this.browserDefaultLang = window.navigator.language.substring(0, 2);
    this.availableLangs = CONSTANTS.SETTINGS.FRONTEND.AVAILABLELANGS;
  }

  setLang(lang: string){
    if (!this.availableLangs.includes(lang)) return;

    this.translatorService.setDefaultLang(lang);
  }
}

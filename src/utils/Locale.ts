import { Language } from "../types/Language";
import { ILocale } from "./ILocale";

class LocaleDefault implements ILocale {
  get defaultLanguage(): Language {
    const browserLanguage = navigator.language.split("-").at(0);
    if (
      browserLanguage === undefined ||
      !this.isLanguageSupported(browserLanguage)
    ) {
      return Language.en;
    } else {
      return Language[browserLanguage as any] as unknown as Language;
    }
  }

  isLanguageSupported(language: string): boolean {
    for (const key in Language) {
      if (key === language) {
        return true;
      }
    }
    return false;
  }
}

export const Locale = new LocaleDefault();

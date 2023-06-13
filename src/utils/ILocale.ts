import { Language } from "../types/Language";

export interface ILocale {
  readonly defaultLanguage: Language;
  isLanguageSupported(language: string): boolean;
}

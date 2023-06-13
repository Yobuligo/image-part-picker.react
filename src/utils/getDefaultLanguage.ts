import { Language } from "../types/Language";
import { checkNotNull } from "./checkNotNull";

export const getDefaultLanguage = () => {
  const defaultLanguage = checkNotNull(navigator.language.split("-").at(0));
  if (isLanguageSupported(defaultLanguage)) {
    return Language[defaultLanguage as any];
  } else {
    return Language.en;
  }
};

export const isLanguageSupported = (language: string): boolean => {
  for (const key in Language) {
    if (key === language) {
      return true;
    }
  }
  return false;
};

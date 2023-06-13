import * as translations from "../i18n";
import { Language } from "../types/Language";
import { useLanguage } from "./useLanguage";

export const useTranslation = () => {
  const [language] = useLanguage();
  switch (language) {
    case Language.de:
      return { t: translations.de };
    default:
      return { t: translations.en };
  }
};

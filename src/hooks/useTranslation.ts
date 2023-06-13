import { useState } from "react";
import * as translations from "../i18n";

export const useTranslation = () => {
  const [language, setLanguage] = useState("en");

  switch (language) {
    case "en":
      return translations.en;
    case "de":
      return translations.de;
    default:
      return translations.en;
  }
};

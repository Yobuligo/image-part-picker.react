import { useState } from "react";
import { Locale } from "../utils/Locale";

export const useLanguage = () => {
  const [language, setLanguage] = useState(Locale.defaultLanguage);
  return [language, setLanguage];
};

import { useState } from "react";
import { Language } from "../types/Language";

export const useLanguage = () => {
  const [language, setLanguage] = useState(Language.en);
  return [language, setLanguage];
};

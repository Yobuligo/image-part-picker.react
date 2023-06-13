import { useState } from "react";
import { getDefaultLanguage } from "../utils/getDefaultLanguage";

export const useLanguage = () => {
  const [language, setLanguage] = useState(getDefaultLanguage());
  return [language, setLanguage];
};

import { createI18n } from "vue-i18n";
import en from "./en.json";
import id from "./id.json";

export const availableLocales = [
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export const i18n = createI18n({
  legacy: false,
  locale: "id", // default locale
  fallbackLocale: "en",
  messages: {
    id,
    en,
  },
});

export default i18n;

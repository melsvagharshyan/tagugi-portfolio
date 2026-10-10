import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, LANGUAGES } from './languages';
import { en } from './locales/en';
import { hy } from './locales/hy';
import { ru } from './locales/ru';

export const resources = {
  en: { translation: en },
  hy: { translation: hy },
  ru: { translation: ru },
} as const;

const syncDocument = (language: string) => {
  document.documentElement.lang = language;
  document.title = i18n.t('meta.title');
};

i18n.on('languageChanged', syncDocument);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: LANGUAGES.map((language) => language.code),
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;

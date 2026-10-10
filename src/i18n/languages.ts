export const LANGUAGES = [
  { code: 'en', short: 'ENG', name: 'English' },
  { code: 'hy', short: 'ՀԱՅ', name: 'Հայերեն' },
  { code: 'ru', short: 'РУС', name: 'Русский' },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const LANGUAGE_STORAGE_KEY = 'taguhi-portfolio-lang';

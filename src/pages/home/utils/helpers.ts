import { LANGUAGES, type LanguageCode } from '../../../i18n/languages';
import type { Project, TimelineEntry } from './types';

export const getTimelineSpan = (entries: TimelineEntry[]): string | undefined => {
  const years = entries.flatMap((entry) => entry.period.match(/\d{4}/g) ?? []).map(Number);
  if (!years.length) return undefined;
  const first = Math.min(...years);
  const last = Math.max(...years);
  return first === last ? String(first) : `${first} — ${last}`;
};

export const getNativeLanguageName = (code: LanguageCode): string =>
  LANGUAGES.find((language) => language.code === code)?.name ?? code;

export const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');

export const getMediaKind = (project: Project): 'piece' | 'video' =>
  project.media[0]?.type === 'video' ? 'video' : 'piece';

export const isActivationKey = (key: string): boolean => key === 'Enter' || key === ' ';

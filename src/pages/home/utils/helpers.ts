import type { Project } from './types';

export const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');

export const getMediaKind = (project: Project): 'piece' | 'video' =>
  project.media[0]?.type === 'video' ? 'video' : 'piece';

export const clamp01 = (value: number): number => Math.min(1, Math.max(0, value));

export const getScrollProgress = (element: HTMLElement): number => {
  const { top, height } = element.getBoundingClientRect();
  const scrollable = height - window.innerHeight;
  return scrollable > 0 ? clamp01(-top / scrollable) : 0;
};

/** Eases each step so the ring briefly settles on every card while scrolling. */
export const settleOnSteps = (position: number): number => {
  const step = Math.floor(position);
  const fraction = position - step;
  return step + fraction * fraction * (3 - 2 * fraction);
};

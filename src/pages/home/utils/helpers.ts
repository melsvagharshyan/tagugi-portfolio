import type { Project, SceneQuality } from './types';

export const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');

export const getMediaKind = (project: Project): 'piece' | 'video' =>
  project.media[0]?.type === 'video' ? 'video' : 'piece';

export const clamp01 = (value: number): number => Math.min(1, Math.max(0, value));

export const getScrollProgress = (element: HTMLElement): number => {
  const { top, height } = element.getBoundingClientRect();
  const scrollable = height - window.innerHeight;
  return scrollable > 0 ? clamp01(-top / scrollable) : 0;
};

export const getHeroScrollProgress = (): number => clamp01(window.scrollY / window.innerHeight);

/** Scale applied to UVs so a texture covers a plane like CSS `object-fit: cover`. */
export const getCoverScale = (planeAspect: number, imageAspect: number): [number, number] =>
  planeAspect > imageAspect ? [1, imageAspect / planeAspect] : [planeAspect / imageAspect, 1];

export const getSceneQuality = (): SceneQuality => {
  const { hardwareConcurrency = 8, deviceMemory = 8 } = navigator as Navigator & { deviceMemory?: number };
  const lowPower =
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    hardwareConcurrency <= 4 ||
    deviceMemory <= 4;
  return { lowPower, dpr: lowPower ? [1, 1.5] : [1, 2] };
};

/** Eases each step so the ring briefly settles on every card while scrolling. */
export const settleOnSteps = (position: number): number => {
  const step = Math.floor(position);
  const fraction = position - step;
  return step + fraction * fraction * (3 - 2 * fraction);
};

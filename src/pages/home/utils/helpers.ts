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

export const getHeroScrollProgress = (): number => clamp01(window.scrollY / window.innerHeight);

/** Evenly distributes points over a sphere surface (golden-angle spiral). */
export const getFibonacciSpherePoints = (count: number, radius: number): [number, number, number][] => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, index) => {
    const y = 1 - ((index + 0.5) / count) * 2;
    const ring = Math.sqrt(1 - y * y);
    const theta = goldenAngle * index;
    return [Math.cos(theta) * ring * radius, y * radius, Math.sin(theta) * ring * radius];
  });
};

/** Scale applied to UVs so a texture covers a plane like CSS `object-fit: cover`. */
export const getCoverScale = (planeAspect: number, imageAspect: number): [number, number] =>
  planeAspect > imageAspect ? [1, imageAspect / planeAspect] : [planeAspect / imageAspect, 1];

/** Eases each step so the ring briefly settles on every card while scrolling. */
export const settleOnSteps = (position: number): number => {
  const step = Math.floor(position);
  const fraction = position - step;
  return step + fraction * fraction * (3 - 2 * fraction);
};

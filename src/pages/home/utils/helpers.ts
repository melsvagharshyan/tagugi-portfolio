import { SWIPER } from './constants';
import type { Project } from './types';

export const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');

export const getMediaKind = (project: Project): 'piece' | 'video' =>
  project.media[0]?.type === 'video' ? 'video' : 'piece';

export const getSwiperCardWidth = (viewportWidth: number): number => {
  const breakpoint = SWIPER.breakpoints.find(({ minWidth }) => viewportWidth >= minWidth);
  return viewportWidth * (breakpoint?.ratio ?? 1);
};

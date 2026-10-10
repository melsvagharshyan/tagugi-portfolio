import type { Translation } from '../../../i18n/locales/en';

export type ProjectMedia =
  | { type: 'image'; src: string }
  | { type: 'video'; src: string; poster: string };

export type ProjectCategory = keyof Translation['projects']['categories'];

export type ProjectTitle = keyof Translation['projects']['titles'];

export interface Project {
  slug: string;
  titleKey: ProjectTitle;
  category: ProjectCategory;
  cover: string;
  media: ProjectMedia[];
}

export type NavId = keyof Translation['nav'];

export interface NavLink {
  id: NavId;
  href: string;
}

export type TimelineEntry = Translation['about']['experience'][number];

export type ContactKind = keyof Translation['contact']['labels'];

export interface ContactItem {
  kind: ContactKind;
  value: string;
  href: string;
}

export type CursorVariant = 'default' | 'link' | 'view' | 'hidden';

export interface ImageMaterialUniforms {
  opacity: number;
  grayscale: number;
  zoom: number;
}

export interface DragSpinState {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  dragging: boolean;
}

export interface SilkRibbonConfig {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  width: number;
  amplitude: number;
  phase: number;
  opacity: number;
}

export interface PearlConfig {
  position: [number, number, number];
  scale: number;
  color: string;
}

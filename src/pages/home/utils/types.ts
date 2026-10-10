import type { IconType } from 'react-icons';
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

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  id: keyof Translation['about']['skillGroups'];
  skills: Skill[];
}

export type ContactKind = keyof Translation['contact']['labels'];

export interface ContactItem {
  kind: ContactKind;
  value: string;
  href: string;
}

export type CursorVariant = 'default' | 'link' | 'view' | 'hidden';

export interface OrbPearl {
  top: string;
  left: string;
  size: string;
  delay: number;
}

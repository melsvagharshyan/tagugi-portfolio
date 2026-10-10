import {
  TbBrandAdobeAfterEffect,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandBlender,
  TbBrandFigma,
  TbBrandUnity,
  TbBrush,
  TbChisel,
  TbCube,
  TbCube3dSphere,
  TbMovie,
  TbTexture,
} from 'react-icons/tb';
import type { LanguageCode } from '../../../i18n/languages';
import type { ContactItem, NavLink, OrbPearl, Project, SkillGroup } from './types';

export const OWNER = {
  email: 'taguhi.hartenian@gmail.com',
  phone: '+374 98 48 41 12',
  behance: 'https://www.behance.net/taguhihartenian',
  linkedin: 'https://www.linkedin.com/in/taguhi-hartenian-a8734126a/',
  cv: '/files/taguhi-hartenian-cv.pdf',
  photo: '/images/owner/portrait.webp',
} as const;

export const NAV_LINKS: NavLink[] = [
  { id: 'projects', href: '#projects' },
  { id: 'about', href: '#about' },
  { id: 'contact', href: '#contact' },
];

export const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export const HEADER_SCROLL_OFFSET = 24;

export const HEADER_HIDE_AFTER = 480;

export const MONOGRAM_INITIALS = 'TH';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'design',
    skills: [
      { name: 'Adobe Illustrator', icon: TbBrandAdobeIllustrator },
      { name: 'Adobe Photoshop', icon: TbBrandAdobePhotoshop },
      { name: 'Figma', icon: TbBrandFigma },
      { name: 'Procreate', icon: TbBrush },
    ],
  },
  {
    id: 'threeD',
    skills: [
      { name: 'Blender', icon: TbBrandBlender },
      { name: '3Ds Max', icon: TbCube3dSphere },
      { name: 'Zbrush', icon: TbChisel },
      { name: 'Adobe Substance Painter', icon: TbTexture },
      { name: 'Adobe Dimension', icon: TbCube },
      { name: 'Unity', icon: TbBrandUnity },
    ],
  },
  {
    id: 'motion',
    skills: [
      { name: 'Adobe After Effects', icon: TbBrandAdobeAfterEffect },
      { name: 'Procreate Dreams', icon: TbMovie },
    ],
  },
];

export const SKILL_COUNT = SKILL_GROUPS.reduce((total, group) => total + group.skills.length, 0);

export const SPOKEN_LANGUAGES: LanguageCode[] = ['hy', 'ru', 'en'];

export const CONTACT_ITEMS: ContactItem[] = [
  { kind: 'email', value: OWNER.email, href: `mailto:${OWNER.email}` },
  { kind: 'phone', value: OWNER.phone, href: 'tel:+37498484112' },
  { kind: 'behance', value: 'Taguhi Hartenian', href: OWNER.behance },
  { kind: 'linkedin', value: 'Taguhi Hartenian', href: OWNER.linkedin },
];

export const WELCOME = {
  storageKey: 'taguhi-portfolio-welcomed',
  duration: 2600,
  letterStagger: 0.07,
  ease: [0.76, 0, 0.24, 1],
} as const;

export const CURSOR_TRAIL_EASE = 0.16;

export const CURSOR_INTERACTIVE_SELECTOR = '[data-cursor], a, button, [role="button"]';

/** Drops the middle column (lg) or every second tile (sm) to give the grid a staggered rhythm. */
export const PROJECT_GRID_STAGGER =
  'sm:[&>*:nth-child(even)]:translate-y-20 lg:[&>*:nth-child(3n+1)]:translate-y-0 lg:[&>*:nth-child(3n+2)]:translate-y-28 lg:[&>*:nth-child(3n)]:translate-y-0';

export const PROJECT_TILE_REVEAL = {
  hidden: { opacity: 0, y: 48 },
  shown: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  stagger: 0.1,
} as const;

export const ORB_PEARLS: OrbPearl[] = [
  { top: '12%', left: '4%', size: '11%', delay: 0 },
  { top: '70%', left: '10%', size: '8%', delay: 1.2 },
  { top: '22%', left: '86%', size: '9%', delay: 0.6 },
  { top: '78%', left: '80%', size: '6%', delay: 1.8 },
];

export const PROJECTS: Project[] = [
  {
    slug: 'gotcha-drinks',
    category: 'brandingSocial',
    titleKey: 'gotchaDrinks',
    cover: '/images/projects/gotcha-drinks/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/gotcha-drinks/01.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/02.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/03.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/04.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/05.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/06.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/07.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/08.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/09.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/10.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/11.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/12.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/13.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/14.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/15.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/16.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/17.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/18.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/19.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/20.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/21.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/22.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/23.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/24.webp' },
      { type: 'image', src: '/images/projects/gotcha-drinks/25.webp' },
    ],
  },
  {
    slug: 'andmore-from-gotcha',
    category: 'menuSocial',
    titleKey: 'andMore',
    cover: '/images/projects/andmore-from-gotcha/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/andmore-from-gotcha/01.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/02.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/03.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/04.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/05.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/06.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/07.webp' },
      { type: 'image', src: '/images/projects/andmore-from-gotcha/08.webp' },
    ],
  },
  {
    slug: 'concert-posters',
    category: 'posters',
    titleKey: 'concertPosters',
    cover: '/images/projects/concert-posters/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/concert-posters/01.webp' },
      { type: 'image', src: '/images/projects/concert-posters/02.webp' },
      { type: 'image', src: '/images/projects/concert-posters/03.webp' },
      { type: 'image', src: '/images/projects/concert-posters/04.webp' },
      { type: 'image', src: '/images/projects/concert-posters/05.webp' },
      { type: 'image', src: '/images/projects/concert-posters/06.webp' },
    ],
  },
  {
    slug: 'neka-j-space',
    category: 'brandVisuals',
    titleKey: 'neka',
    cover: '/images/projects/neka-j-space/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/neka-j-space/01.webp' },
      { type: 'image', src: '/images/projects/neka-j-space/02.webp' },
      { type: 'image', src: '/images/projects/neka-j-space/03.webp' },
      { type: 'image', src: '/images/projects/neka-j-space/04.webp' },
    ],
  },
  {
    slug: 'korpus',
    category: 'brandVisuals',
    titleKey: 'korpus',
    cover: '/images/projects/korpus/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/korpus/01.webp' },
      { type: 'image', src: '/images/projects/korpus/02.webp' },
      { type: 'image', src: '/images/projects/korpus/03.webp' },
    ],
  },
  {
    slug: 'fastdevnet',
    category: 'socialMedia',
    titleKey: 'fastDevNet',
    cover: '/images/projects/fastdevnet/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/fastdevnet/01.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/02.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/03.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/04.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/05.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/06.webp' },
      { type: 'image', src: '/images/projects/fastdevnet/07.webp' },
    ],
  },
  {
    slug: 'igaming-poster',
    category: 'poster',
    titleKey: 'igaming',
    cover: '/images/projects/igaming-poster/cover.webp',
    media: [
      { type: 'image', src: '/images/projects/igaming-poster/01.webp' },
    ],
  },
  {
    slug: 'animated-illustrations',
    category: 'animation',
    titleKey: 'animated',
    cover: '/images/projects/animated-illustrations/cover.webp',
    media: [
      { type: 'video', src: '/videos/animated-illustrations/01.mp4', poster: '/images/projects/animated-illustrations/video-01.webp' },
      { type: 'video', src: '/videos/animated-illustrations/02.mp4', poster: '/images/projects/animated-illustrations/video-02.webp' },
      { type: 'video', src: '/videos/animated-illustrations/03.mp4', poster: '/images/projects/animated-illustrations/video-03.webp' },
      { type: 'video', src: '/videos/animated-illustrations/04.mp4', poster: '/images/projects/animated-illustrations/video-04.webp' },
      { type: 'video', src: '/videos/animated-illustrations/05.mp4', poster: '/images/projects/animated-illustrations/video-05.webp' },
    ],
  },
];

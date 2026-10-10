import type { ContactItem, NavLink, PearlConfig, Project, SilkRibbonConfig } from './types';

const CDN = 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1';

export const OWNER = {
  email: 'taguhi.hartenian@gmail.com',
  phone: '+374 98 48 41 12',
  behance: 'https://www.behance.net/taguhihartenian',
  linkedin: 'https://www.linkedin.com/in/taguhi-hartenian-a8734126a/',
  cv: `${CDN}/6a4bb655db246e87cac483f0_44ed8b7a4b783c26466e1a2bad060f66_CV_PORTFOLIO_TAGUHI.pdf`,
  photo: `${CDN}/6a4525f94bb55d76b43b9c86_1a89b303a923967132e7661c7cb9fdec_Screenshot%202026-07-01%20183518.jpg`,
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

export const SKILLS = [
  'Adobe Substance Painter',
  'Adobe After Effects',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe Dimension',
  '3Ds Max',
  'Blender',
  'Zbrush',
  'Unity',
  'Figma',
  'Procreate Dreams',
  'Procreate',
];

export const CONTACT_ITEMS: ContactItem[] = [
  { kind: 'email', value: OWNER.email, href: `mailto:${OWNER.email}` },
  { kind: 'phone', value: OWNER.phone, href: 'tel:+37498484112' },
  { kind: 'behance', value: 'Taguhi Hartenian', href: OWNER.behance },
  { kind: 'linkedin', value: 'Taguhi Hartenian', href: OWNER.linkedin },
];

export const CAROUSEL = {
  scrollPerCardSvh: 65,
  cardAspect: 1.25,
  cardGap: 1.22,
  tilt: 0.1,
  damping: 4,
};

export const SKILLS_GLOBE = {
  radius: 2.1,
  autoSpin: 0.18,
  dragSensitivity: 0.006,
  inertia: 2.5,
};

export const HERO_SCROLL = {
  orbLift: 0.45,
  orbShrink: 0.25,
  pearlSpread: 0.7,
};

export const PORTRAIT_RIPPLE = {
  frequency: 26,
  speed: 4,
  strength: 0.014,
  chroma: 0.005,
};

export const CURSOR_TRAIL_EASE = 0.16;

export const CURSOR_INTERACTIVE_SELECTOR = '[data-cursor], a, button, [role="button"]';

export const SCENE_COLORS = {
  pearl: '#f4dfd8',
  blush: '#e9c4bd',
  rose: '#c98a8f',
  wine: '#7a2e46',
  champagne: '#d4ad86',
  ivory: '#faf6f2',
};

export const FLOATING_PEARLS: PearlConfig[] = [
  { position: [-4.6, 2.1, -2.5], scale: 0.32, color: SCENE_COLORS.pearl },
  { position: [-3.2, -2.4, -1], scale: 0.2, color: SCENE_COLORS.blush },
  { position: [-5.8, -0.4, -4], scale: 0.42, color: SCENE_COLORS.pearl },
  { position: [4.9, -2.5, -1.5], scale: 0.26, color: SCENE_COLORS.champagne },
  { position: [5.6, 2.3, -3], scale: 0.36, color: SCENE_COLORS.pearl },
  { position: [1.2, 3, -3.5], scale: 0.18, color: SCENE_COLORS.blush },
  { position: [-0.6, -3.2, -2.5], scale: 0.22, color: SCENE_COLORS.pearl },
  { position: [6.6, 0.1, -5], scale: 0.48, color: SCENE_COLORS.blush },
];

export const SILK_RIBBONS: SilkRibbonConfig[] = [
  { color: SCENE_COLORS.champagne, position: [-1, 2.2, -2], rotation: [0, 0, -0.18], width: 0.9, amplitude: 0.7, phase: 0, opacity: 0.55 },
  { color: SCENE_COLORS.blush, position: [1.5, -0.4, -3], rotation: [0.2, 0, 0.12], width: 1.3, amplitude: 0.9, phase: 2.1, opacity: 0.5 },
  { color: SCENE_COLORS.rose, position: [0, -2.6, -2.5], rotation: [-0.1, 0, -0.08], width: 0.6, amplitude: 0.6, phase: 4.2, opacity: 0.35 },
];

export const ABOUT_PEARLS: PearlConfig[] = [
  { position: [-5.4, 2.6, -1.5], scale: 0.28, color: SCENE_COLORS.pearl },
  { position: [5.2, 1.4, -2], scale: 0.4, color: SCENE_COLORS.blush },
  { position: [-4.2, -2.8, -3], scale: 0.34, color: SCENE_COLORS.champagne },
  { position: [4.4, -3, -1], scale: 0.2, color: SCENE_COLORS.pearl },
  { position: [0.8, 3.4, -4], scale: 0.24, color: SCENE_COLORS.pearl },
];

export const ABOUT_SCROLL = {
  ribbonTravel: 3,
  pearlParallax: 4,
};

export const TIMELINE = {
  pearlRadius: 9,
  threadRadius: 1.1,
  wobble: 7,
  viewportFocus: 0.65,
};

export const PROJECTS: Project[] = [
  {
    slug: 'gotcha-drinks',
    category: 'brandingSocial',
    titleKey: 'gotchaDrinks',
    cover: `${CDN}/6a4b929174269ac63cf59d61_1.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b57542df500f241f2d99_togobar_menu%201.png` },
      { type: 'image', src: `${CDN}/6a43b612994990363a6d8478_screens%20spring%20special%202026-09%201.png` },
      { type: 'image', src: `${CDN}/6a43b612334b25b9885e72b1_screens%20spring%20special%202026-10%201.png` },
      { type: 'image', src: `${CDN}/6a43b612f2023af38925e1ea_screens%20spring%20special%202026-08%201.png` },
      { type: 'image', src: `${CDN}/6a43b612334b25b9885e7296_screens%20spring%20special%202026-12%201.png` },
      { type: 'image', src: `${CDN}/6a43b612a5e6b7fa2b0b854f_screens%20spring%20special%202026-11%201.png` },
      { type: 'image', src: `${CDN}/6a43b612263a2780ef7db38a_screens%20spring%20special%202026-07%201.png` },
      { type: 'image', src: `${CDN}/6a43b572a7b3e9049f12f9c8_CreamchaPost-04%201.png` },
      { type: 'image', src: `${CDN}/6a43b572994990363a6cf98a_CreamchaPost-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b571994990363a6cf928_CreamchaPost-02%201.png` },
      { type: 'image', src: `${CDN}/6a43b57111ddd166c21048e6_CreamchaPost-03%201.png` },
      { type: 'image', src: `${CDN}/6a43b573ba6bdd45082a5a70_hiring%20posts%20example-01%201.png` },
      { type: 'image', src: `${CDN}/6a4b9050069a1dc98709fb83_spring%20characters%20post%20size-07%201.png` },
      { type: 'image', src: `${CDN}/6a4b9050fe09d8eb5046a785_spring%20characters%20post%20size-02%201.png` },
      { type: 'image', src: `${CDN}/6a4b9050f46c40af53dc2655_spring%20characters%20post%20size-03%201.png` },
      { type: 'image', src: `${CDN}/6a4b9050069a1dc98709fbec_spring%20characters%20post%20size-06%201.png` },
      { type: 'image', src: `${CDN}/6a4b906c0795e352133314f7_spring%20characters%20post%20size-01%201.png` },
      { type: 'image', src: `${CDN}/6a4b90507f9eb91c1f1f4b37_spring%20characters%20post%20size-04%201.png` },
      { type: 'image', src: `${CDN}/6a4b90502c8c9686cacdcd70_spring%20characters%20post%20size-05%201.png` },
      { type: 'image', src: `${CDN}/6a43b5736a550680f0e72f35_Dahuks2-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b5736a550680f0e72f02_Dahuks-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b57342df500f241f2c42_DAHUKORD-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b5725d9126845a8aa91e_DahukKoghk-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b574969bb39d6a553e75_Shun-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b57043b21a26c5a20912_Bajak-01%201.png` },
    ],
  },
  {
    slug: 'andmore-from-gotcha',
    category: 'menuSocial',
    titleKey: 'andMore',
    cover: `${CDN}/6a4b9291d6c7f92c88c8a83c_2.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b572a5ab51665093bf64_create%20your%20plate%20post-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b5712ca568569d5d3d7a_Andmore3%201.png` },
      { type: 'image', src: `${CDN}/6a43b571a5e6b7fa2b0b0618_Andmore1%201.png` },
      { type: 'image', src: `${CDN}/6a43b578e6c99d2aabd6f624_lent_menu%20%5BRecovered%5D-01%201.png` },
      { type: 'image', src: `${CDN}/6a43b578cb15d5a851a5a5f6_lent_menu%20%5BRecovered%5D-05%201.png` },
      { type: 'image', src: `${CDN}/6a43b575334b25b9885ded39_lent_menu%20%5BRecovered%5D-04%201.png` },
      { type: 'image', src: `${CDN}/6a43b578bc6baec6923cf8b1_lent_menu%20%5BRecovered%5D-07%201.png` },
      { type: 'image', src: `${CDN}/6a43b57491e5af01547d3ed0_lent_menu%20%5BRecovered%5D-08%201.png` },
    ],
  },
  {
    slug: 'concert-posters',
    category: 'posters',
    titleKey: 'concertPosters',
    cover: `${CDN}/6a4b92910194d64a174af083_7.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b573a5ab51665093bfc4_Eka%201.png` },
      { type: 'image', src: `${CDN}/6a45140b7665cc8b34de52da_image%203.png` },
      { type: 'image', src: `${CDN}/6ac8c0e17499c84e863dd031_2f9a158e-46d7-4093-a88f-8d7038eb6c02.jpg` },
      { type: 'image', src: `${CDN}/6ac8c0fac7725107409b78c4_761a401f-41ec-42db-becb-d9557dd09308.jpg` },
      { type: 'image', src: `${CDN}/6ac8c0fa448ebae176f70846_d7e41854-11ee-43c2-9d32-cad59c65e1c1.jpg` },
      { type: 'image', src: `${CDN}/6ac8c0fa259a69fc61b91fe0_235b820e-59cc-4065-87ca-fe3d5343871a.jpg` },
    ],
  },
  {
    slug: 'neka-j-space',
    category: 'brandVisuals',
    titleKey: 'neka',
    cover: `${CDN}/6a4b92917e7e01d646eff70a_5.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b57843af9d4fe43d2d43_Neka(1)%201.png` },
      { type: 'image', src: `${CDN}/6a43b5742ca568569d5d42c8_Neka04%201.png` },
      { type: 'image', src: `${CDN}/6a43b57842df500f241f3033_MovenpickxNeka%201.png` },
      { type: 'image', src: `${CDN}/6a43b574967f4b701b752f73_Neka%205.png` },
    ],
  },
  {
    slug: 'korpus',
    category: 'brandVisuals',
    titleKey: 'korpus',
    cover: `${CDN}/6a4b92919087bd67682e08c6_4.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b57450d2b666255e4738_korpus(1)%201.png` },
      { type: 'image', src: `${CDN}/6a43b5734db9acb17b4069db_korpus%201.png` },
      { type: 'image', src: `${CDN}/6a43b573312259508feb26f7_korpus(2)%201.png` },
    ],
  },
  {
    slug: 'fastdevnet',
    category: 'socialMedia',
    titleKey: 'fastDevNet',
    cover: `${CDN}/6a4b9291c0f664cd3d95386b_3.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b57473199eededeecd31_post6%201.png` },
      { type: 'image', src: `${CDN}/6a4b930cf46c40af53de17a0_Post9.jpg` },
      { type: 'image', src: `${CDN}/6a4b930c7e7e01d646f08a7d_post8.jpg` },
      { type: 'image', src: `${CDN}/6a4b930ce3f24f89d95ed075_Post16.jpg` },
      { type: 'image', src: `${CDN}/6a4b930c0ce76ad8779e0a03_Post10.jpg` },
      { type: 'image', src: `${CDN}/6a43b57411ddd166c2104ae7_Post5%201.png` },
      { type: 'image', src: `${CDN}/6a43b574acf6624bb1e233f1_post3%201.png` },
    ],
  },
  {
    slug: 'igaming-poster',
    category: 'poster',
    titleKey: 'igaming',
    cover: `${CDN}/6a4b9290f9790e8d86b91a76_6.jpg`,
    media: [
      { type: 'image', src: `${CDN}/6a43b578ce797c8a88dd6d09_AppConferenceCancun%201.png` },
    ],
  },
  {
    slug: 'animated-illustrations',
    category: 'animation',
    titleKey: 'animated',
    cover: `${CDN}/6ac90c357e7a6a04e2f99cc7_3a90d2f6-80c0-4c6f-b9af-cf0ec8461ce9.jpg`,
    media: [
      { type: 'video', src: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90b8a9f2a10ac24057191_IMG_2404-ezgif.com-mp4-to-webm-converter_mp4.mp4', poster: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90b8a9f2a10ac24057191_IMG_2404-ezgif.com-mp4-to-webm-converter_poster.0000000.jpg' },
      { type: 'video', src: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90ba92c9ad408b0c433ee_IMG_2403-ezgif.com-mp4-to-webm-converter_mp4.mp4', poster: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90ba92c9ad408b0c433ee_IMG_2403-ezgif.com-mp4-to-webm-converter_poster.0000000.jpg' },
      { type: 'video', src: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bc6fd056b97e41438f3_IMG_2408-ezgif.com-mp4-to-webm-converter_mp4.mp4', poster: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bc6fd056b97e41438f3_IMG_2408-ezgif.com-mp4-to-webm-converter_poster.0000000.jpg' },
      { type: 'video', src: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bf3bdbb462f3d7f285d_IMG_2405-ezgif.com-mp4-to-webm-converter_mp4.mp4', poster: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bf3bdbb462f3d7f285d_IMG_2405-ezgif.com-mp4-to-webm-converter_poster.0000000.jpg' },
      { type: 'video', src: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bcf32f967e8f4f4657c_IMG_2406-ezgif.com-mp4-to-webm-converter_mp4.mp4', poster: 'https://cdn.prod.website-files.com/6a43afeaaaec0bbbf56551b1%2F6ac90bcf32f967e8f4f4657c_IMG_2406-ezgif.com-mp4-to-webm-converter_poster.0000000.jpg' },
    ],
  },
];

const media = {
  piece_one: '{{count}} piece',
  piece_other: '{{count}} pieces',
  video_one: '{{count}} video',
  video_other: '{{count}} videos',
};

export const en = {
  meta: {
    title: 'Taguhi Hartenian | Graphic Designer & Concept Artist',
  },
  common: {
    city: 'Yerevan',
    location: 'Yerevan, Armenia',
    backToTop: 'Back to top',
    language: 'Language',
  },
  owner: {
    fullName: 'Hartenian Taguhi',
    headerName: 'Taguhi <em>Hartenian</em>',
  },
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
  header: {
    portfolio: 'Portfolio © 2026',
    letsTalk: 'Let’s talk',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    ringText: 'Graphic Designer · Concept Artist · ',
  },
  welcome: {
    title: 'Welcome',
    subtitle: 'Taguhi Hartenian · Portfolio',
  },
  hero: {
    eyebrow: 'Graphic Designer & Concept Artist',
    title: 'Hi, I’m <em>Taguhi</em> — a Senior Graphic Designer from Armenia, creating visuals that stand out.',
    hint: 'Scroll down for a selection of my work',
    disciplines: ['Branding', 'Packaging', 'Illustration', '3D Art'],
    viewWork: 'View selected work',
    aboutMe: 'Read more about me',
  },
  marquee: [
    'Branding',
    'Packaging',
    'Illustration',
    '3D Art',
    'Posters',
    'Social Media',
    'Animation',
    'Visual Storytelling',
  ],
  projects: {
    eyebrow: 'Projects',
    title: 'Selected <em>work</em>',
    view: 'View',
    open: 'Open project',
    close: 'Close project',
    media,
    categories: {
      brandingSocial: 'Branding · Social',
      menuSocial: 'Menu · Social',
      posters: 'Posters',
      brandVisuals: 'Brand Visuals',
      socialMedia: 'Social Media',
      poster: 'Poster',
      animation: 'Animation',
    },
    titles: {
      gotchaDrinks: 'Gotcha Drinks',
      andMore: 'And More from Gotcha',
      concertPosters: 'Concert Posters',
      neka: 'Neka J Space',
      korpus: 'Korpus',
      fastDevNet: '.fastDevNet',
      igaming: 'iGaming Poster',
      animated: 'Animated Illustrations',
    },
  },
  about: {
    eyebrow: 'About',
    title: 'Hartenian <em>Taguhi</em>',
    intro: 'I’m a Graphic Designer, Illustrator, and 3D Artist from <em>Armenia.</em>',
    paragraphs: [
      'I specialize in brand design, packaging, and visual content, combining creativity with strong design principles to develop unique and impactful visual concepts.',
      'My work spans graphic design, illustration, and 3D art, bringing ideas to life through thoughtful design and visual storytelling.',
      'Feel free to explore my CV to learn more about my experience and skills!',
    ],
    downloadCv: 'Download my CV',
    rows: {
      experience: 'Experience',
      education: 'Education',
      practice: 'Practice',
      skills: 'Skills',
      languages: 'Languages',
    },
    languages: { hy: 'Armenian', ru: 'Russian', en: 'English' },
    skillGroups: { design: 'Design & Illustration', threeD: '3D & Real-time', motion: 'Motion' },
    tools: '{{count}} tools',
    experience: [
      { place: 'Gotcha / and m[ ]re', period: '2025 - 2026', roles: ['Graphic Designer'] },
      { place: 'Neka Group', period: '2024 - 2025', roles: ['Graphic Designer'] },
      { place: 'Logos Expo', period: '2022', roles: ['Graphic Designer'] },
      { place: 'Tsirani Restaurant', period: '2021 - 2022', roles: ['Graphic Designer', 'Copywriter'] },
    ],
    education: [
      {
        place: 'State Academy of Fine Arts',
        period: '2021 - 2025',
        roles: ['Graphic Design', '2D/3D Art', 'Web Design', 'Illustration'],
      },
    ],
    practice: [
      { place: 'Popok Studio', period: '2022', roles: ['3D Art & Rigging'] },
      { place: 'Rockbite', period: '2023', roles: ['2D Art & Rigging'] },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s create something <em>visual, bold</em> and meaningful together.',
    subtitle: 'For commissions, freelance projects, collaborations or just a quick hello — feel free to reach out.',
    startProject: 'Start a project',
    labels: {
      email: 'Email',
      phone: 'Phone',
      behance: 'Behance',
      linkedin: 'LinkedIn',
    },
  },
};

export type Translation = typeof en;

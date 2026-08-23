export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  /** Compact name drawn on the object in the playground; defaults to title. */
  short?: string;
  /** Short flag rendered above the title, e.g. "Next up". */
  status?: string;
  summary: string;
  technologies: string[];
  links: ProjectLink[];
  /** Omitted for projects with no build to show yet. */
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'PocketPet',
    status: 'In Progress',
    summary:
      'A virtual pet game in Unity and C# where players raise, customize, and care for their own unique pet through real-time growth and interaction mechanics. Early in development.',
    technologies: ['Unity', 'C#'],
    links: [],
  },
  {
    title: 'RokueQuest',
    summary:
      'Roguelike dungeon crawler in Java, built with a 6-person team — procedurally generated dungeons, turn-based combat across four character classes, an equipment/loot rarity system, and permadeath mechanics.',
    technologies: ['Java', 'Roguelike', 'OOP', 'Swing', 'Team project'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/cagribilginer/RokueQuest-A-Roguelike-Adventure-with-Java',
      },
    ],
    image: '/assets/projects/project4.webp',
  },
  {
    title: 'KUMap',
    summary:
      'Cross-platform Flutter app for navigating Koç University’s Sarıyer campus — interactive maps, building/landmark info, and wayfinding built for daily use by students, faculty, staff, and visitors alike. Published on Koç Hub.',
    technologies: ['Flutter', 'Campus maps', 'Navigation', 'Koç Hub'],
    links: [{ label: 'kumap.hub.ku.edu.tr', href: 'https://kumap.hub.ku.edu.tr' }],
    image: '/assets/projects/project1.webp',
  },
  {
    title: 'ACTIVE',
    summary:
      'Adaptive Context-aware Travel Intelligent Virtual Explorer: a hybrid mobile navigation and AR app for solo urban exploration, built with a 4-person team. Moves beyond flat 2D maps by layering real-world locations with depth-aware AR and an AI travel companion. Built the cross-platform UI and state management in Flutter, then dropped into a native Swift/ARKit layer to get real LiDAR-based scene depth and occlusion, so AR markers correctly hide behind buildings instead of floating on top of everything. Integrated Google’s Geospatial API (GARSession) and Places API to anchor AR content to real-world coordinates and enrich it with location data. On top of that, a multimodal AI companion gives route safety insights, live place suggestions, and voice/text guidance.',
    technologies: ['Flutter', 'Swift', 'ARKit', 'LiDAR', 'Google Geospatial API', 'AI', 'Team project'],
    links: [],
    image: '/assets/projects/project2.webp',
  },
  {
    title: 'EPL Predictor ’26',
    short: 'EPL Predictor',
    summary:
      'Multi-stage ML pipeline for English Premier League outcomes: regress expected goals (xG) per match, then classify home–draw–away using those predictions. Built on archival and rolling-form data (2000–2025) plus live 2025–26 signals; ensemble models with XGBoost leading around 52% accuracy in evaluation. Insights exposed through a real-time React and Tailwind dashboard.',
    technologies: ['Python', 'XGBoost', 'Ensembles', 'React', 'Tailwind', 'Sports analytics'],
    links: [{ label: 'epl-predictor-2026.vercel.app', href: 'https://epl-predictor-2026.vercel.app' }],
    image: '/assets/projects/project3.webp',
  },
  {
    title: 'PhotoCloud',
    summary:
      'Desktop Java social app inspired by Instagram: authentication, photo sharing, likes and comments, profiles, discovery, and a layered architecture behind a Swing UI.',
    technologies: ['Java', 'Swing', 'OOP', 'Desktop UI'],
    links: [{ label: 'Code', href: 'https://github.com/cagribilginer/PhotoCloud' }],
    image: '/assets/projects/project5.webp',
  },
  {
    title: 'AidTrack',
    summary:
      'Full-stack emergency aid distribution system for a database systems course — designed a PostgreSQL schema (8 tables, 1,260+ seed rows sourced from real FEMA disaster records), built a Flask REST API with analytical SQL views, and a React dashboard for coordinators to track active disasters, volunteer deployments, and supply inventory in real time.',
    technologies: ['PostgreSQL', 'Flask', 'React', 'SQL', 'Full-stack'],
    links: [{ label: 'aidtrack-system-b798.vercel.app', href: 'https://aidtrack-system-b798.vercel.app/dashboard' }],
    image: '/assets/projects/project6.webp',
  },
  {
    title: 'TripPlanner',
    status: 'Coming soon',
    summary:
      'A trip-planning tool born out of a real problem — coordinating cheap flights, stays, and things to do across Europe with a friend already abroad, where flight prices, timing, and routes all had to line up. Automates that combinatorial search instead of doing it by hand.',
    technologies: ['AI', 'Travel'],
    links: [],
  },
];

export interface SkillGroup {
  title: string;
  /** Compact name drawn on the object in the playground. */
  short: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: 'Programming Languages',
    short: 'Languages',
    items: ['Java', 'Python', 'C', 'C#', 'Swift', 'Dart', 'JavaScript'],
  },
  {
    title: 'Frontend & Mobile',
    short: 'Frontend',
    items: ['Flutter', 'React', '.NET / XAML'],
  },
  {
    title: 'Databases & Data',
    short: 'Data',
    items: ['SQL', 'Redis', 'Qdrant'],
  },
  {
    title: 'DevOps & Tooling',
    short: 'DevOps',
    items: ['Docker', 'Railway', 'Git', 'GitHub'],
  },
  {
    title: 'Embedded & Hardware',
    short: 'Embedded',
    items: ['STM32', 'Embedded C', 'Dashboard / HMI'],
  },
  {
    title: 'AI & Assistants',
    short: 'AI',
    items: ['Claude', 'Cursor', 'ML Exploration'],
  },
  {
    title: 'Design',
    short: 'Design',
    items: ['Photoshop'],
  },
  {
    title: 'Game Development',
    short: 'Game dev',
    items: ['Unity', 'C#', 'Game Systems', 'OOP Architecture'],
  },
];

export interface ExperienceItem {
  role: string;
  /** Date range, rendered in the mono left rail. */
  year: string;
  company: string;
  /** Compact name drawn on the object in the playground. */
  short: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Software Engineer Intern',
    year: 'Feb 2026 – Jun 2026',
    company: 'Yapı Kredi Teknoloji',
    short: 'Yapı Kredi',
    location: 'Çayırova, Kocaeli',
    description: [
      'Contributed to modernizing a legacy leasing department system end-to-end, translating requirements from senior stakeholders into a new screen designed and built from scratch.',
      'Built the UI in React and TypeScript, and implemented the Java backend service calls needed to fetch and populate data across the interface, within a microservices architecture.',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Microservices', 'Agile'],
  },
  {
    role: 'Test Engineer Intern',
    year: 'Jul 2025 – Sep 2025',
    company: 'TEGSOFT Contact Center Softwares',
    short: 'TEGSOFT',
    location: 'İstanbul, Sarıyer',
    description: [
      'Wrote and executed functional and regression test cases in BrowserStack for a contact center platform, validating core call and chat features across releases.',
      'Tracked defects in Jira and verified backend data integrity, working closely with developers to resolve issues and keep the platform stable through each deployment cycle.',
    ],
    technologies: ['QA', 'Functional testing', 'Regression testing', 'Jira', 'Data integrity'],
  },
  {
    role: 'Software Engineer Intern',
    year: 'Sep 2024 – Feb 2025',
    company: 'IBTECH International Information and Communication Technologies',
    short: 'IBTECH',
    location: 'Gebze, Kocaeli',
    description: [
      'Started in the Corporate Loans team, replacing hardcoded values in a banking system’s interface with dynamic JSON-based data handling — building the C# (XAML) frontend to capture and validate user input, and Java backend logic to process and fetch the corresponding data.',
      'Transferred to the Leasing department to help modernize a legacy system end-to-end: designed new screens, implemented features and bug fixes, and participated in code reviews.',
    ],
    technologies: ['Java', 'C#', 'XAML', 'JSON', 'Banking software', 'Agile'],
  },
  {
    role: 'Board Member',
    year: 'Jun 2024 – Jun 2026',
    company: 'Koç University Underwater Sports Club (KUSAS)',
    short: 'KUSAS',
    location: 'İstanbul, Sarıyer',
    description: [
      'Helped organize scuba diving trips to coastal dive sites across Turkey for the university community.',
      'Planned meetings and events that introduced students to scuba diving and grew participation in underwater sports.',
    ],
    technologies: ['Event planning', 'Team leadership', 'Community building', 'Scuba diving'],
  },
  {
    role: 'Team Member',
    year: 'Dec 2023 – Jul 2024',
    company: 'Koç University Renewable Energy Community (KUREC)',
    short: 'KUREC',
    location: 'İstanbul, Sarıyer',
    description: [
      'Worked in a multidisciplinary team on Hydromobile systems for the Teknofest Efficiency Challenge.',
      'Built and debugged embedded software on STM32 and designed the in-vehicle gauge cluster / dashboard display for driver feedback.',
      'Focused on STM32 firmware and the instrument cluster display; motor driver, VCU and other electrical hardware were handled by teammates.',
    ],
    technologies: ['STM32', 'Embedded C', 'HMI / dashboard', 'Teknofest'],
  },
  {
    role: 'Player · Team Captain (2023–2024)',
    year: 'Sep 2021 – Jun 2024',
    company: 'Koç Ramses Ultimate Frisbee Team',
    short: 'Koç Ramses',
    location: 'İstanbul, Sarıyer',
    description: [
      'Competed with the university ultimate frisbee team in trainings, tournaments and inter-university play.',
      'Served as team captain for the 2023–2024 season, helping coordinate practices, strategy and team culture.',
    ],
    technologies: ['Ultimate frisbee', 'Team captaincy', 'Sports leadership'],
  },
];

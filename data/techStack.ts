export interface TechCategory {
  title: string;
  category: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export const techStackData: TechCategory[] = [
  {
    title: 'Frontend Engineering',
    category: 'CLIENT-SIDE',
    description: 'Modern, component-driven client architectures that deliver fluid experiences and fast Core Web Vitals.',
    skills: [
      { name: 'React', tag: 'Core Library' },
      { name: 'JavaScript', tag: 'Language' },
      { name: 'HTML5', tag: 'Semantic Structure' },
      { name: 'CSS3', tag: 'Modern Layouts' },
      { name: 'Tailwind CSS', tag: 'Design System' },
    ],
  },
  {
    title: 'Backend & APIs',
    category: 'SERVER-SIDE',
    description: 'Structured server runtimes and RESTful protocols engineered for reliability, security, and scalability.',
    skills: [
      { name: 'Node.js', tag: 'Runtime Environment' },
      { name: 'Express.js', tag: 'API Framework' },
      { name: 'Java', tag: 'Enterprise Backend' },
      { name: 'REST APIs', tag: 'Web Protocols' },
    ],
  },
  {
    title: 'Data & Storage',
    category: 'DATABASES',
    description: 'Normalized relational databases and flexible document stores for structured business information.',
    skills: [
      { name: 'MySQL', tag: 'Relational SQL' },
      { name: 'MongoDB', tag: 'Document Database' },
    ],
  },
  {
    title: 'QA & Testing Suites',
    category: 'QUALITY ASSURANCE',
    description: 'Rigorous automated and exploratory testing methodologies ensuring zero regression issues.',
    skills: [
      { name: 'Selenium', tag: 'Browser Automation' },
      { name: 'TestNG', tag: 'Testing Framework' },
      { name: 'Postman', tag: 'API Validation' },
      { name: 'Jira', tag: 'Defect Tracking' },
    ],
  },
  {
    title: 'Developer Tooling & CI',
    category: 'WORKFLOW & DEVOPS',
    description: 'Version control, collaborative workflows, continuous integration, and modern coding environments.',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Code Collaboration' },
      { name: 'VS Code', tag: 'Development IDE' },
      { name: 'Jenkins', tag: 'CI/CD Pipelines' },
    ],
  },
];

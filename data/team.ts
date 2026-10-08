export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  bio: string;
  image: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  specialties: string[];
}

export const foundersInfo = {
  tagline: 'Two developers. One development team.',
  duoImage: '/team/founders-team.jpg',
  experienceStatement:
    'We are Rohit Bhosale and Akshay Shingade — a dedicated two-person development team based in India. We engineer reliable digital products, modern responsive websites, and custom business systems for companies, agencies, and founders worldwide.',
};

export const teamData: TeamMember[] = [
  {
    id: 'rohit-bhosale',
    name: 'Rohit Bhosale',
    role: 'Full Stack Developer / QA Engineer',
    badge: 'ENGINEERING & QA LEAD',
    bio: 'Focused on full-stack architecture, clean API systems, and disciplined software quality assurance. Expert in building performant web apps and building automated test suites with Selenium and Postman to ensure bug-free production rollouts.',
    image: '/team/rohit-bhosale.jpg',
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'Java',
      'SQL',
      'REST APIs',
      'Selenium',
      'Postman',
      'Git/GitHub',
      'Software Testing',
    ],
    github: 'https://github.com/RohitBhosale673',
    linkedin: 'https://linkedin.com/in/',
    email: 'rohitbhosale673@gmail.com',
    specialties: [
      'Full Stack Architecture',
      'Test Automation (Selenium / TestNG)',
      'API Testing & Postman',
      'Database Design & SQL',
      'Quality Engineering',
    ],
  },
  {
    id: 'akshay-shingade',
    name: 'Akshay Shingade',
    role: 'Full Stack Developer',
    badge: 'FULL STACK & UI/UX ARCHITECT',
    bio: 'Dedicated to crafting modern web applications, high-performance responsive interfaces, and robust backend architectures. Combines precise UI/UX engineering with clean, modular code to turn complex business needs into fluid digital products.',
    image: '/team/akshay-shingade.jpg',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Tailwind CSS',
      'REST APIs',
      'Git/GitHub',
      'UI/UX Architecture',
    ],
    github: 'https://github.com/akshayshingade',
    linkedin: 'https://linkedin.com/in/',
    email: 'akshayshingade@gmail.com',
    specialties: [
      'Next.js & React Systems',
      'Design Engineering & Animations',
      'Responsive Web Architecture',
      'Node & Express Backends',
      'Performance Optimization',
    ],
  },
];

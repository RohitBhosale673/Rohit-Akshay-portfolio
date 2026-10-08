export interface ProcessStep {
  number: string;
  phase: string;
  summary: string;
  details: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    phase: 'DISCOVER',
    summary: 'Understand requirements and business goals.',
    details: 'We begin by aligning on your product objectives, core audience, functional scope, technical constraints, and measurable success criteria.',
  },
  {
    number: '02',
    phase: 'PLAN',
    summary: 'Define features, architecture and development approach.',
    details: 'Drafting data schemas, system boundaries, technology stacks, milestone timelines, and component breakdowns for efficient execution.',
  },
  {
    number: '03',
    phase: 'DESIGN',
    summary: 'Create responsive and user-friendly interfaces.',
    details: 'Prototyping intuitive UI layouts, visual hierarchy, mobile viewport responsiveness, and clean interactive states.',
  },
  {
    number: '04',
    phase: 'DEVELOP',
    summary: 'Build frontend, backend and integrations.',
    details: 'Writing clean, typed, modular code with reusable components, robust state handling, REST API services, and responsive styles.',
  },
  {
    number: '05',
    phase: 'TEST',
    summary: 'Check functionality, responsiveness, APIs and edge cases.',
    details: 'Rigorous cross-device testing, API verification with Postman, automated UI test routines, and edge-case validation to prevent defects.',
  },
  {
    number: '06',
    phase: 'DEPLOY',
    summary: 'Prepare the project for production.',
    details: 'Configuring domain DNS, production environments (Vercel, AWS, etc.), performance caching, security headers, and SEO metadata.',
  },
  {
    number: '07',
    phase: 'SUPPORT',
    summary: 'Improve and maintain the product when required.',
    details: 'Continuous updates, feature extensions, performance optimization, and rapid bug resolution as your product scales.',
  },
];

export interface PartnerReason {
  number: string;
  title: string;
  description: string;
}

export const partnerReasons: PartnerReason[] = [
  {
    number: '01',
    title: 'Direct Developer Communication',
    description: 'You talk directly with the engineers building your code. No account manager telephone games or lost requirements.',
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'We build with contemporary frameworks (React, Next.js, Node.js, modern CSS) that are fast, stable, and widely supported.',
  },
  {
    number: '03',
    title: 'Responsive-First Development',
    description: 'Every layout is engineered to look and perform flawlessly across all viewports—from 375px mobile screens to 4K desktop displays.',
  },
  {
    number: '04',
    title: 'Clean and Maintainable Code',
    description: 'Structured, documented, and modular codebases that your internal team or future developers can easily navigate and extend.',
  },
  {
    number: '05',
    title: 'Testing and Quality Focus',
    description: 'Testing is integrated into our workflow through Postman API validations, automated Selenium test cases, and device QA.',
  },
  {
    number: '06',
    title: 'Flexible Project Collaboration',
    description: 'Available for full end-to-end product delivery, dedicated sprint sprints, or feature-specific augmentations.',
  },
  {
    number: '07',
    title: 'Suitable for Agency / Outsourced Development',
    description: 'We reliably act as the dedicated development arm for design studios, marketing agencies, and expanding organizations.',
  },
  {
    number: '08',
    title: 'End-to-End Development Support',
    description: 'From wireframes and system architecture through QA testing and production deployment, we handle the entire engineering pipeline.',
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    category: 'Digital Presence',
    description:
      'Engineered for speed, brand credibility, and search engine visibility. We build modern, responsive marketing and institutional websites with clean semantics and high-impact design.',
    deliverables: ['Custom Next.js / React frontends', 'Mobile-first fluid layouts', 'SEO & Core Web Vitals optimization', 'Interactive micro-animations'],
  },
  {
    id: 'web-application-development',
    number: '02',
    title: 'Web Application Development',
    category: 'Interactive Platforms',
    description:
      'Full-stack dynamic applications engineered for real-world functionality. Intuitive user workflows, modular component architecture, and responsive dashboard interfaces.',
    deliverables: ['Single Page Applications (SPAs)', 'Real-time dashboard utilities', 'Role-based authentication & state', 'Cross-browser performance'],
  },
  {
    id: 'business-websites',
    number: '03',
    title: 'Business Websites',
    category: 'Commercial Web',
    description:
      'Purpose-built commercial web portals for hotels, organizations, agricultural enterprises, and service businesses designed to convert visitors and establish authority.',
    deliverables: ['Commercial showcases & catalogs', 'Inquiry & booking pipelines', 'Fast local business SEO setup', 'Content management structures'],
  },
  {
    id: 'custom-business-software',
    number: '04',
    title: 'Custom Business Software',
    category: 'Enterprise Tooling',
    description:
      'Targeted software solutions built around your exact operational workflows. We replace disconnected spreadsheets and paper processes with reliable web utilities.',
    deliverables: ['Operational workflow automation', 'Custom reporting & data tables', 'Internal tooling & admin panels', 'Automated calculations & tracking'],
  },
  {
    id: 'crm-management-systems',
    number: '05',
    title: 'CRM / Management Systems',
    category: 'Operational CRM',
    description:
      'Lightweight, responsive customer relationship and management systems designed for clarity. Track client records, pipeline stages, and service requests without bloat.',
    deliverables: ['Contact & company record stores', 'Sales & interaction timeline logs', 'Stage-by-stage pipeline flows', 'Responsive mobile management'],
  },
  {
    id: 'ecommerce-experiences',
    number: '06',
    title: 'E-Commerce Experiences',
    category: 'Commerce Solutions',
    description:
      'Frictionless online shopping experiences with rapid product discovery, interactive carts, intuitive filters, and streamlined checkout sequences.',
    deliverables: ['Interactive catalog browsing', 'Dynamic shopping cart drawers', 'Filter & search architectures', 'Order inquiry flows & gateways'],
  },
  {
    id: 'api-backend-development',
    number: '07',
    title: 'API & Backend Development',
    category: 'Cloud & Infrastructure',
    description:
      'Robust server-side logic and structured RESTful APIs. Clean database design with SQL/NoSQL databases, reliable endpoint documentation, and secure communications.',
    deliverables: ['REST API architecture & endpoints', 'Node.js & Express server engines', 'Database schema design (SQL / Mongo)', 'Data validation & security standards'],
  },
  {
    id: 'qa-software-testing',
    number: '08',
    title: 'QA & Software Testing',
    category: 'Quality Assurance',
    description:
      'Disciplined software testing and quality engineering. We verify that features function correctly across browsers and devices before production deployment.',
    deliverables: ['Automated UI tests (Selenium / TestNG)', 'API test suites with Postman', 'Regression test matrices', 'Defect tracking & test reports'],
  },
];

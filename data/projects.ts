export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterCategories: string[]; // for multi-filter matching
  description: string;
  longDescription: string;
  thumbnail: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: string;
  year: string;
}

export const filterTabs = [
  { id: 'ALL', label: 'ALL' },
  { id: 'WEBSITES', label: 'WEBSITES' },
  { id: 'WEB APPS', label: 'WEB APPS' },
  { id: 'BUSINESS', label: 'BUSINESS' },
  { id: 'E-COMMERCE', label: 'E-COMMERCE' },
  { id: 'PORTFOLIO', label: 'PORTFOLIO' },
  { id: 'QA / TESTING', label: 'QA / TESTING' },
  { id: 'WORKFLOW', label: 'WORKFLOW' },
];

export const projectsData: Project[] = [
  {
    id: '01',
    slug: 'qa-projects-portfolio',
    title: 'QA Projects Portfolio',
    category: 'QA / Testing Portfolio',
    filterCategories: ['ALL', 'QA / TESTING', 'PORTFOLIO'],
    description:
      'A portfolio demonstrating software testing, QA projects, testing practices and related technical work.',
    longDescription:
      'A technical portfolio dedicated to software quality engineering, automated testing frameworks, and QA methodologies. It systematically documents test plan design, automation scripts, defect reporting lifecycle, and end-to-end API validation strategies that ensure production software reliability.',
    thumbnail: '/projects/qa-portfolio.svg',
    gallery: [
      '/projects/qa-portfolio.svg',
      '/projects/qa-portfolio-2.svg',
    ],
    technologies: ['Selenium', 'TestNG', 'Java', 'Postman', 'Jira', 'API Testing', 'Automation Frameworks'],
    features: [
      'Automated UI test suites built with Selenium WebDriver and Java',
      'API test collection design, validation scripts, and Postman automation',
      'Regression test matrix, test cases, and edge-case validation suites',
      'Defect lifecycle tracking and bug reporting methodology showcase',
      'Performance and cross-browser test compatibility execution records'
    ],
    role: 'QA Engineering & Test Automation Lead',
    liveUrl: 'https://qa-portfolio-rohits-projects-84cb3046.vercel.app/',
    featured: true,
    status: 'Live Portfolio',
    year: '2024',
  },
  {
    id: '02',
    slug: 'royal-portfolio',
    title: 'Royal Portfolio',
    category: 'Portfolio / Creative Website',
    filterCategories: ['ALL', 'WEBSITES', 'PORTFOLIO'],
    description:
      'A modern portfolio website focused on presenting personal/professional work through an interactive digital experience.',
    longDescription:
      'An immersive web experience built to showcase creative and technical work with editorial finesse. Features custom motion choreography, dynamic project showcases, smooth scroll transitions, and precision typography that elevates personal branding into an art form.',
    thumbnail: '/projects/royal-portfolio.svg',
    gallery: [
      '/projects/royal-portfolio.svg',
      '/projects/royal-portfolio-2.svg',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Interactive UI'],
    features: [
      'Cinematic motion design with fluid transition states',
      'Interactive project spotlight cards with smooth hover physics',
      'Ultra-responsive mobile and desktop typography hierarchy',
      'Optimized performance with strict Core Web Vitals adherence',
      'Clean contact inquiry flow and professional bio presentation'
    ],
    role: 'Frontend Engineering & Interactive Design',
    liveUrl: 'https://royal-portfolio-iota.vercel.app/',
    featured: true,
    status: 'Live in Production',
    year: '2024',
  },
  {
    id: '03',
    slug: 'home-expense-tracker',
    title: 'Home Expense Tracker',
    category: 'Web Application / Finance Utility',
    filterCategories: ['ALL', 'WEB APPS', 'BUSINESS'],
    description:
      'A web application interface designed for tracking and managing household expenses through a dashboard-based experience.',
    longDescription:
      'A focused personal and household utility dashboard designed to simplify everyday financial logging. Enables individuals and families to input expenditures, organize them by category, observe real-time balance calculations, and monitor monthly spending habits without unnecessary friction.',
    thumbnail: '/projects/expense-tracker.svg',
    gallery: [
      '/projects/expense-tracker.svg',
      '/projects/expense-tracker-2.svg',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Dashboard UI', 'Client State Management'],
    features: [
      'Instant expense and income transaction logging with category tags',
      'Visual balance calculations and monthly expenditure summaries',
      'Categorized breakdowns to quickly pinpoint primary spending areas',
      'Clean interactive dashboard layout with responsive card metrics',
      'Persistent local data store for instant offline availability'
    ],
    role: 'Full Stack Web App Development',
    liveUrl: 'https://homeexpencetracker.vercel.app/dashboard',
    featured: true,
    status: 'Live Web App',
    year: '2024',
  },
  {
    id: '04',
    slug: 'cart-website',
    title: 'Cart Website',
    category: 'E-Commerce / Shopping',
    filterCategories: ['ALL', 'WEBSITES', 'E-COMMERCE'],
    description:
      'An e-commerce-style shopping interface demonstrating product browsing, cart interaction and a modern online shopping experience.',
    longDescription:
      'A modern front-end digital shopping prototype designed to test and demonstrate streamlined checkout experiences. Highlights item discovery, rapid filtering, instant quantity mutations, subtotal calculation, and stateful cart drawer management.',
    thumbnail: '/projects/cart-website.svg',
    gallery: [
      '/projects/cart-website.svg',
      '/projects/cart-website-2.svg',
    ],
    technologies: ['React', 'JavaScript', 'E-Commerce UX', 'State Management', 'Tailwind CSS'],
    features: [
      'Interactive product catalog with category selection',
      'Real-time cart state with quantity adjustment and dynamic subtotal calculations',
      'Drawer-style side cart with seamless item removal and state updates',
      'Responsive product grid with high-resolution image views',
      'Mock checkout progression demonstrating multi-step transaction UX'
    ],
    role: 'Frontend Engineering & E-Commerce Prototyping',
    liveUrl: 'https://cart-website-iota.vercel.app/',
    featured: false,
    status: 'Live Prototype',
    year: '2024',
  },
  {
    id: '05',
    slug: 'bhavani-shankar-math',
    title: 'Bhavani Shankar Math',
    category: 'Organization / Website',
    filterCategories: ['ALL', 'WEBSITES', 'BUSINESS'],
    description:
      'A dedicated website created to provide an organized digital presence for Bhavani Shankar Math, Daund.',
    longDescription:
      'An institutional web portal created for the community and visitors of Bhavani Shankar Math, Daund. Built to communicate the history, spiritual mission, daily rituals, festival schedules, and charitable initiatives with dignity, clarity, and easy accessibility on mobile devices.',
    thumbnail: '/projects/bhavani-shankar-math.svg',
    gallery: [
      '/projects/bhavani-shankar-math.svg',
      '/projects/bhavani-shankar-math-2.svg',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI', 'Media Optimization'],
    features: [
      'Institutional history and sacred tradition documentation',
      'Event and festival schedules with community announcements',
      'Devotional media showcase and photo gallery architecture',
      'Visitor information, location directions, and contact channels',
      'Fast loading speed across low-bandwidth mobile connections'
    ],
    role: 'Full Stack Development & Cultural Web Architecture',
    liveUrl: 'https://bhavani-shankar-math-daund.vercel.app/',
    featured: true,
    status: 'Live in Production',
    year: '2024',
  },
  {
    id: '06',
    slug: 'portfolio-lrek',
    title: 'Portfolio LREK',
    category: 'Portfolio Website',
    filterCategories: ['ALL', 'WEBSITES', 'PORTFOLIO'],
    description:
      'A modern portfolio experience designed to present professional information, work and digital identity.',
    longDescription:
      'A sleek personal developer portfolio highlighting technical capabilities, finished deliverables, and contact interfaces. Engineered with a crisp typographic rhythm, dark aesthetic, and lightweight component structure.',
    thumbnail: '/projects/portfolio-lrek.svg',
    gallery: [
      '/projects/portfolio-lrek.svg',
      '/projects/portfolio-lrek-2.svg',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    features: [
      'Structured technical competencies and tools showcase',
      'Curated case studies with direct links and live previews',
      'Fast asset delivery with near-zero layout shift',
      'Cross-platform responsive design tested for mobile screens',
      'Clean direct communication channels for incoming opportunities'
    ],
    role: 'Frontend Web Development',
    liveUrl: 'https://portfolio-lrek.vercel.app/',
    featured: false,
    status: 'Live in Production',
    year: '2024',
  },
  {
    id: '07',
    slug: 'fertiliser',
    title: 'Fertiliser',
    category: 'Agriculture / Business Website',
    filterCategories: ['ALL', 'WEBSITES', 'BUSINESS'],
    description:
      'A business-oriented agriculture/fertiliser website concept designed to present products and information through a modern web interface.',
    longDescription:
      'A modern agro-business web concept built to serve agricultural enterprises and farming communities. Features product spec sheets, soil nutrition guidance, crop category breakdowns, and direct distributor inquiry touchpoints.',
    thumbnail: '/projects/fertiliser.svg',
    gallery: [
      '/projects/fertiliser.svg',
      '/projects/fertiliser-2.svg',
    ],
    technologies: ['Web Development', 'React', 'Tailwind CSS', 'Product UI', 'Responsive Design'],
    features: [
      'Agricultural product catalog with detailed nutrient specs',
      'Crop suitability categorization and application guidelines',
      'Dealer and distributor inquiry contact points',
      'Accessible, clean visual hierarchy for field-ready usability',
      'SEO-friendly structure for local business search discovery'
    ],
    role: 'Web Development & UI Architecture',
    liveUrl: 'https://fertiliser.vercel.app/',
    featured: false,
    status: 'Live Prototype',
    year: '2024',
  },
  {
    id: '08',
    slug: 'darbar-seva-flow',
    title: 'Darbar Seva Flow',
    category: 'Management / Workflow Application',
    filterCategories: ['ALL', 'WEB APPS', 'WORKFLOW', 'BUSINESS'],
    description:
      'A digital workflow/application concept designed around organizing and managing a structured Darbar Seva process.',
    longDescription:
      'A workflow management system conceived to organize multi-stage service requests, seva volunteer scheduling, and event activity progression. Built with clear queue states, activity logs, and real-time status transitions to eliminate paper bottlenecks and coordination delays.',
    thumbnail: '/projects/darbar-seva.svg',
    gallery: [
      '/projects/darbar-seva.svg',
      '/projects/darbar-seva-2.svg',
    ],
    technologies: ['Web App Architecture', 'JavaScript', 'Workflow Automation', 'State Machines'],
    features: [
      'Step-by-step seva workflow tracker with milestone confirmation',
      'Volunteer task allocation and status progression views',
      'Activity dashboard for event coordinators and management',
      'Structured form inputs with validation for service requests',
      'Responsive interface optimized for tablet and mobile field use'
    ],
    role: 'Full Stack Workflow Engineering',
    liveUrl: 'https://darbar-seva-flow.base44.app',
    featured: true,
    status: 'Live Application',
    year: '2024',
  },
  {
    id: '09',
    slug: 'rbas-estates-residences',
    title: 'RBAS — Estates & Residences',
    category: 'Real Estate / 3D Luxury Architectural Platform',
    filterCategories: ['ALL', 'WEBSITES', 'WEB APPS', 'BUSINESS'],
    description:
      'A curated portfolio of architect-designed residences across Mumbai, Goa, and Alibaug featuring interactive 3D room walkthroughs, lighting studies, and private viewing bookings.',
    longDescription:
      'RBAS Estates & Residences is a luxury digital real estate platform engineered for showcasing curated architectural properties. Featuring interactive property collections with category filters (Apartments, Villas, Penthouses), interactive 3D room walkthrough stages, detailed measured floor plans, hour and season sunlight studies, private viewing appointment booking, and responsive search across prime locations (Worli, Bandra West, Alibaug, North Goa).',
    thumbnail: '/projects/rbas-real-estate.svg',
    gallery: [
      '/projects/rbas-real-estate.svg',
      '/projects/rbas-real-estate-2.svg',
    ],
    technologies: ['Vanilla JS & HTML5', 'Interactive 3D Stages', 'CSS Grid & Flexbox', 'Vercel Deployment', 'Responsive Design', 'Modal Engine'],
    features: [
      'Curated property collection with category filtering (Apartments, Villas, Penthouses)',
      'Interactive 3D Walkthrough stage with perspective room tilting & lighting studies',
      'Comprehensive property detail modal with multi-photo gallery and verified specifications',
      'Private viewing booking form with date/time scheduling and verification',
      'Real-time location, residence type, and budget search system',
      'Editorial design with fluid typography, luxury brand aesthetic, and micro-interactions'
    ],
    role: 'Frontend Engineering & Interactive Architecture',
    liveUrl: 'https://reaestate.vercel.app/',
    featured: true,
    status: 'Live in Production',
    year: '2024',
  },
];

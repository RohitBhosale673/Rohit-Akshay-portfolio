"use client";

import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

// Curated high-resolution Unsplash stock images for reliable presentation
const UNSPLASH_IMAGES = {
  hospitality: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  crm: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  qa: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  creative: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  finance: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  ecommerce: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
  organization: "https://images.unsplash.com/photo-1548625361-16a73539bc27?auto=format&fit=crop&w=1200&q=80",
  code: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  agritech: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
  workflow: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
};

const WORKS: WorksWheelItem[] = [
  {
    title: "Hotel Jagdamba",
    image: UNSPLASH_IMAGES.hospitality,
    href: "/projects/jagdamba-hotel-website",
  },
  {
    title: "Mini CRM Application",
    image: UNSPLASH_IMAGES.crm,
    href: "/projects/mini-crm-mobile-application",
  },
  {
    title: "QA Testing Portfolio",
    image: UNSPLASH_IMAGES.qa,
    href: "/projects/qa-projects-portfolio",
  },
  {
    title: "Royal Portfolio",
    image: UNSPLASH_IMAGES.creative,
    href: "/projects/royal-portfolio",
  },
  {
    title: "Home Expense Tracker",
    image: UNSPLASH_IMAGES.finance,
    href: "/projects/home-expense-tracker",
  },
  {
    title: "Cart Storefront",
    image: UNSPLASH_IMAGES.ecommerce,
    href: "/projects/cart-website",
  },
  {
    title: "Bhavani Shankar Math",
    image: UNSPLASH_IMAGES.organization,
    href: "/projects/bhavani-shankar-math",
  },
  {
    title: "Portfolio LREK",
    image: UNSPLASH_IMAGES.code,
    href: "/projects/portfolio-lrek",
  },
  {
    title: "Agri Fertiliser",
    image: UNSPLASH_IMAGES.agritech,
    href: "/projects/fertiliser",
  },
  {
    title: "Darbar Seva Flow",
    image: UNSPLASH_IMAGES.workflow,
    href: "/projects/darbar-seva-flow",
  },
];

export default function WorksWheelDemo() {
  return (
    <div className="bg-background text-foreground w-full h-[650px] relative rounded-2xl overflow-hidden border border-white/10">
      <WorksWheel items={WORKS} label="R×A '26" action="View Case Study" />
    </div>
  );
}

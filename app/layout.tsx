import type { Metadata, Viewport } from 'next';
import './globals.css';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  metadataBase: new URL(siteConfig.meta.url),
  applicationName: 'Rohit × Akshay Studio',
  authors: [
    { name: 'Rohit Bhosale', url: 'https://github.com/RohitBhosale673' },
    { name: 'Akshay Shingade' },
  ],
  keywords: [
    'Full Stack Developers',
    'Rohit Bhosale',
    'Akshay Shingade',
    'Web Development Studio',
    'Next.js Developers',
    'React',
    'Tailwind CSS',
    'QA Engineering',
    'Software Testing',
    'Selenium WebDriver',
    'Custom Software',
    'Business Applications',
    'Agency Development Partner',
  ],
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteConfig.meta.url,
    siteName: 'Rohit × Akshay — Full Stack Development Studio',
    images: [
      {
        url: '/team/founders-team.jpg',
        width: 1200,
        height: 800,
        alt: 'Rohit Bhosale and Akshay Shingade — Full Stack Development Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ['/team/founders-team.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#090A0E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-background text-foreground antialiased selection:bg-blue-600/30 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

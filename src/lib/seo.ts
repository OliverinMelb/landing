import type { Metadata } from 'next'

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://triadessay.com';

export function generateSEO({
  title = 'Triadessay - Professional Academic Writing Services | Essays, Assignments, Exams',
  description = 'Expert academic writing services with 24/7 support. Get help with essays, assignments, exams, and online courses. 1000+ expert writers, grade guarantee, 100% original work.',
  keywords = [
    'academic writing',
    'essay writing service',
    'assignment help',
    'exam assistance',
    'online course help',
    'dissertation writing',
    'research papers',
    'tutoring services',
    'academic support',
    'student help',
    'grade guarantee',
    'expert writers'
  ],
  image = `${baseUrl}/og-image.jpg`,
  url = baseUrl,
  locale = 'en'
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Triadessay Team' }],
    creator: 'Triadessay',
    publisher: 'Triadessay',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'en': '/en',
        'zh': '/zh',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Triadessay',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@triadessay',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
  };
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Triadessay',
  description: 'Professional academic writing services with expert writers, grade guarantees, and 24/7 support.',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday', 
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    }
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '264 W 40th St',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10018',
    addressCountry: 'US'
  },
  sameAs: [
    'https://t.me/triadessay',
    // Add other social media URLs
  ],
  serviceType: [
    'Academic Writing',
    'Essay Writing',
    'Assignment Help',
    'Exam Assistance', 
    'Online Course Management',
    'Tutoring Services'
  ],
  areaServed: [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'New Zealand',
    'Singapore',
    'Malaysia'
  ]
};

export const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${baseUrl}#services`
    },
    {
      '@type': 'ListItem', 
      position: 3,
      name: 'Pricing',
      item: `${baseUrl}#pricing`
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'About',
      item: `${baseUrl}#about`
    }
  ]
};
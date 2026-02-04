import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://khor-portfolio.vercel.app'),
  title: 'Khor Ling Ling | HR Leader, Mentor & Educator',
  description: 'Ms Khor Ling Ling is a passionate people leader with a distinguished career in Human Resources across public healthcare and multinational organizations. Empowering the next generation of global leaders through mentorship and advocacy.',
  keywords: ['HR Professional', 'Human Resources', 'Mentorship', 'Leadership', 'Healthcare HR', 'Career Guidance', 'Public Speaking', 'MOHH', 'Singapore'],
  authors: [{ name: 'Khor Ling Ling' }],
  creator: 'Khor Ling Ling',
  publisher: 'Khor Ling Ling',
  openGraph: {
    title: 'Khor Ling Ling | HR Leader, Mentor & Educator',
    description: 'Empowering the next generation of global leaders through strategic HR leadership, mentorship, and advocacy.',
    url: 'https://khor-portfolio.vercel.app',
    siteName: 'Khor Ling Ling Portfolio',
    locale: 'en_SG',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khor Ling Ling - HR Leader, Mentor & Educator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khor Ling Ling | HR Leader, Mentor & Educator',
    description: 'Empowering the next generation of global leaders through strategic HR leadership and mentorship.',
    images: ['/images/og-image.jpg'],
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
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

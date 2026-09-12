import './globals.css';
import type { Metadata } from 'next';
import { Manrope, Instrument_Serif } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { ContactModalProvider } from '@/components/contact/contact-modal-context';
import { ContactModal } from '@/components/contact/contact-modal';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});
const siteUrl = 'https://trackoneparalegals.com';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TrackOne Paralegals — Outsourced IP Administration & Paralegal Support',
    template: '%s · TrackOne Paralegals',
  },
  description:
    'TrackOne Paralegals provides outsourced intellectual property administrative and paralegal support — docketing, renewals, records management and administrative support — as an extension of your existing legal team.',
  keywords: [
    'IP paralegal support',
    'outsourced IP administration',
    'patent docketing',
    'trademark renewals',
    'IP records management',
    'paralegal services',
    'intellectual property support',
  ],
  authors: [{ name: 'TrackOne Paralegals' }],
  creator: 'TrackOne Paralegals',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'TrackOne Paralegals',
    title: 'TrackOne Paralegals — Outsourced IP Administration & Paralegal Support',
    description:
      'Outsourced intellectual property administrative and paralegal support — docketing, renewals, records management and administrative support, working as an extension of your legal team.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'TrackOne Paralegals',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrackOne Paralegals — Outsourced IP Administration & Paralegal Support',
    description:
      'Outsourced IP administrative and paralegal support — docketing, renewals, records management and administrative support.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};
const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TrackOne Paralegals',
  description:
    'Outsourced intellectual property administrative and paralegal support for law firms and in-house IP teams.',
  url: siteUrl,
  email: 'hello@trackoneparalegals.com',
  areaServed: 'Global',
  serviceType: [
    'IP Paralegal Support',
    'Docketing Support',
    'Maintenance & Renewal Fees',
    'Administrative Support',
    'Records & Data Management',
    'Overflow & Project Support',
  ],
  knowsAbout: [
    'Intellectual Property Administration',
    'Patent Docketing',
    'Trademark Renewals',
    'Portfolio Management',
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ContactModalProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
          </SmoothScrollProvider>
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  ); }

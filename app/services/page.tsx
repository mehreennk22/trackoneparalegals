import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services/services-hero';
import { ServicesDetail } from '@/components/services/services-detail';
import { FinalCTA } from '@/components/home/final-cta';

export const metadata: Metadata = {
  title: 'Services — Outsourced IP Support',
  description:
    'Outsourced IP support scoped around your workflows — paralegal support, docketing, renewals, administrative support, records management and overflow capacity.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services — Outsourced IP Support · TrackOne Paralegals',
    description:
      'Paralegal support, docketing, renewals, administrative support, records management and overflow capacity — scoped around your workflows.',
    url: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetail />
      <FinalCTA />
    </>
  );
}

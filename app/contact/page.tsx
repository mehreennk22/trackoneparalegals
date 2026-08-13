import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm, ContactInfo } from '@/components/contact/contact-form';
import { FadeUp } from '@/components/ui/motion';

export const metadata: Metadata = {
  title: 'Contact — Request IP Support',
  description:
    'Tell us which IP administrative tasks you’d like to hand over and we’ll recommend the right support model. Email hello@trackoneparalegals.com.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Request IP Support · TrackOne Paralegals',
    description:
      'Tell us which tasks you’d like to hand over and we’ll recommend the right support model.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="relative bg-canvas pb-24 sm:pb-32">
        <div className="container-px">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
            <FadeUp>
              <ContactForm />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink-500">
                    Get in touch
                  </h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    Prefer email? Reach us directly and we’ll respond within one business day.
                  </p>
                </div>
                <ContactInfo />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

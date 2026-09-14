'use client';

import { Check, Sparkles } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { cn } from '@/lib/utils';

type Tier = {
  name: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
};

type PricingGroup = {
  title: string;
  description: string;
  tiers: Tier[];
};

const pricingGroups: PricingGroup[] = [
  {
    title: 'Paralegal Services',
    description: 'Trained IP paralegals working inside your systems, from a few hours a week to a fully dedicated resource.',
    tiers: [
      {
        name: 'Flex Support',
        price: '$850',
        period: '/month',
        features: [
          'Up to 10 hours/week',
          'Filing support for US and PCT filings',
          'Docketing and deadline management',
          'Scheduled reporting and docket meetings',
        ],
      },
      {
        name: 'Core Support',
        price: '$1,750',
        period: '/month',
        popular: true,
        features: [
          '25 hours/week',
          'USPTO and PCT filing support and follow-up',
          'Docket management',
          'Client communications',
          'Weekly status updates',
        ],
      },
      {
        name: 'Dedicated Support',
        price: '$3,000',
        period: '/month',
        features: [
          '40 hours/week',
          'Full coverage from filing to case management',
          'Dedicated paralegal assigned to your firm',
          'Docket management',
          'Scheduled reporting',
        ],
      },
      {
        name: 'Build Your Own',
        price: 'Custom',
        features: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
  {
    title: 'Docketing Services',
    description: 'Deadline tracking and case management, scaled to the size of your matter portfolio.',
    tiers: [
      {
        name: 'Docket Lite',
        price: '$750',
        period: '/month',
        features: [
          'Management of up to 50 matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
        ],
      },
      {
        name: 'Docket Pro',
        price: '$1,500',
        period: '/month',
        popular: true,
        features: [
          'Management of up to 150 matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
        ],
      },
      {
        name: 'Docket Plus',
        price: '$3,000',
        period: '/month',
        features: [
          'Unlimited matters',
          'Docketing and tracking of all deadlines',
          'Weekly docket reports',
          'Daily reminders for hard deadlines',
          'Customized reports for different clients',
        ],
      },
      {
        name: 'Build Your Own',
        price: 'Custom',
        features: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
  {
    title: 'Maintenance Fee Services',
    description: 'Monitoring and payment of patent maintenance fees, priced by portfolio size.',
    tiers: [
      {
        name: 'Portfolio Essential',
        price: '$2,500',
        period: '/year',
        features: [
          'Management of up to 15 patents',
          'Deadline monitoring',
          'Maintenance fee payment',
          'Regular reporting',
          'Or $200 per patent',
        ],
      },
      {
        name: 'Portfolio Professional',
        price: '$8,000',
        period: '/year',
        popular: true,
        features: [
          'Management of 16–50 patents',
          'Deadline monitoring + reminders',
          'Fee payment execution',
          'Status confirmations',
          'Quarterly reports',
          'Deadline risk alerts',
          'Or $200 per patent',
        ],
      },
      {
        name: 'Portfolio Enterprise',
        price: '$25,000',
        period: '/year',
        features: [
          '51–150 patents',
          'Priority monitoring & payments',
          'Custom reporting',
          'Audit trail & documentation',
          'Liaison with foreign agents (if needed)',
          'Annual portfolio review call',
          'Or $275 per patent',
        ],
      },
      {
        name: 'Build Your Own',
        price: 'Custom',
        features: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
  {
    title: 'Administrative Services',
    description: 'Assignment recordation, IDS services and rush filing support, billed hourly or fully custom.',
    tiers: [
      {
        name: 'Hourly Package',
        price: '$200',
        period: '/hour',
        features: ['Customized services on an hourly basis'],
      },
      {
        name: 'Build Your Own',
        price: 'Custom',
        features: [
          'Send us your needs in an email or schedule a call',
          'Get a quote with services tailored to your needs',
        ],
      },
    ],
  },
];

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-6 rounded-2xl border p-6 transition-colors duration-300',
        tier.popular
          ? 'border-brand-400 bg-[#131F3D] shadow-[0_20px_50px_-20px_rgba(47,107,255,0.35)]'
          : 'border-white/10 bg-[#0E1830] hover:border-white/20',
      )}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
          <Sparkles className="h-3 w-3" />
          Most Popular
        </span>
      )}
      <div>
        <h3 className="font-sans text-lg font-medium text-white">{tier.name}</h3>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-sans text-3xl font-semibold text-white">{tier.price}</span>
          {tier.period && <span className="text-sm text-muted-foreground">{tier.period}</span>}
        </div>
      </div>
      <ul className="flex flex-1 flex-col gap-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <CTAButton
        href="/contact"
        variant={tier.popular ? 'primary' : 'light'}
        showArrow={false}
        className="w-full justify-center"
      >
        Get Started
      </CTAButton>
    </div>
  );
}
function PricingGroupSection({ group }: { group: PricingGroup }) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-sans text-2xl font-medium tracking-tight text-white sm:text-3xl">
          {group.title}
        </h2>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {group.description}
        </p>
      </div>
      <div
        className={cn(
          'mt-10 grid gap-6',
          group.tiers.length === 4 && 'sm:grid-cols-2 lg:grid-cols-4',
          group.tiers.length === 3 && 'sm:grid-cols-3',
          group.tiers.length === 2 && 'sm:grid-cols-2 max-w-2xl mx-auto',
        )}
      >
        {group.tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  );
}
export default function PricingPage() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-400">
            Pricing
          </span>
          <h1 className="mt-4 font-sans text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Choose the level of support that fits your workload — scale up or down anytime.
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-24">
          {pricingGroups.map((group) => (
            <PricingGroupSection key={group.title} group={group} />
          ))}
        </div>

        <div className="mx-auto mt-24 flex max-w-2xl flex-col items-center gap-5 rounded-2xl border border-white/10 bg-[#0E1830] px-8 py-12 text-center">
          <h2 className="font-sans text-2xl font-medium tracking-tight text-white">
            Ad Hoc & Drawings
          </h2>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Drawing fees depend on the complexity of drawings and time constraints. Rates per sheet typically range from $10 - $35 per sheet. Contact us at{' '}
            <a href="mailto:hello@trackoneparalegals.com" className="text-brand-400 link-underline">
              hello@trackoneparalegals.com
            </a>{' '}
            for a quote.
          </p>
          <CTAButton href="/contact" variant="primary">
            Contact Us
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

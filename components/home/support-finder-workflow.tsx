'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { CTAButton } from '@/components/ui/cta-button';
import { cn } from '@/lib/utils';

const stages = [
  {
    id: 'paralegal',
    label: 'Paralegal Capacity',
    node: 'A',
    recommendation: 'Paralegal Support',
    explanation:
      'Trained IP paralegals integrate into your systems and take on prosecution, correspondence and deadline work — without the overhead of hiring.',
    benefits: ['Works inside your systems', 'No recruitment overhead', 'Scales with workload'],
  },
  {
    id: 'docketing',
    label: 'Docket & Deadlines',
    node: 'B',
    recommendation: 'Docketing Support',
    explanation:
      'Deadline calculation, docket reconciliation and exception management keep your portfolio accurate and auditable.',
    benefits: ['Accurate deadline calculation', 'Reconciliation against records', 'Auditable history'],
  },
  {
    id: 'renewals',
    label: 'Renewals',
    node: 'C',
    recommendation: 'Maintenance & Renewal Fees',
    explanation:
      'Proactive renewal monitoring, structured reminders and payment administration so nothing lapses unnoticed.',
    benefits: ['Proactive monitoring', 'Structured reminders', 'Payment administration'],
  },
  {
    id: 'records',
    label: 'Portfolio Clean-up',
    node: 'D',
    recommendation: 'Records & Data Management',
    explanation:
      'Portfolio audit, data migration and verification against official records eliminate drift and gaps.',
    benefits: ['Eliminate data drift', 'Smooth migration', 'Verified records'],
  },
  {
    id: 'overflow',
    label: 'Overflow',
    node: 'E',
    recommendation: 'Overflow & Project Support',
    explanation:
      'Flexible capacity that ramps up for peaks, projects and leave cover — then scales back down when the surge passes.',
    benefits: ['Rapid ramp-up', 'Leave cover ready', 'No permanent headcount'],
  },
  {
    id: 'unsure',
    label: 'Ad hoc Support',
    node: 'F',
    recommendation: 'Customised Support Package',
    explanation:
      'Tell us which tasks are slowing your team down and we will scope a tailored support model around your workflows.',
    benefits: ['Tailored to your needs', 'Flexible scope', 'Start small, scale up'],
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function SupportFinderWorkflow() {
  const [active, setActive] = useState(stages[0].id);
  const current = stages.find((s) => s.id === active)!;
  const activeIndex = stages.findIndex((s) => s.id === active);

  return (
    <section id="finder" className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.15), transparent 70%)' }}
      />
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Support Finder"
          title="Find the Right Support for Your Workload"
          description="Click a stage in the workflow to see the recommended support model. The diagram updates in real time — no forms, no reloads."
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Workflow diagram */}
          <div className="relative">
            <div className="relative flex flex-col gap-2">
              {/* vertical connector */}
              <div className="absolute bottom-6 left-[27px] top-6 w-px bg-white/8" aria-hidden />
              <motion.div
                className="absolute left-[27px] w-px bg-gradient-to-b from-brand-500 to-teal-500"
                initial={{ height: 0 }}
                animate={{ height: `${((activeIndex + 1) / stages.length) * 100}%` }}
                transition={{ duration: 0.5, ease: easeOut }}
                style={{ top: '1.5rem' }}
              />

              {stages.map((s, i) => {
                const isActive = s.id === active;
                const isPast = i < activeIndex;
                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    onClick={() => setActive(s.id)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-8%' }}
                    transition={{ duration: 0.5, ease: easeOut, delay: i * 0.06 }}
                    whileHover={{ x: 6 }}
                    className={cn(
                      'group relative flex items-center gap-4 rounded-2xl py-3 pl-1 pr-5 text-left transition-colors',
                    )}
                  >
                    {/* node */}
                    <div
                      className={cn(
                        'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 font-sans text-lg font-semibold transition-all duration-400',
                        isActive
                          ? 'border-brand-500 bg-brand-500 text-white shadow-[0_10px_30px_-10px_rgba(47,107,255,0.5)]'
                          : isPast
                          ? 'border-teal-300 bg-[#111E3B] text-teal-300'
                          : 'border-white/10 bg-[#111E3B] text-ink-400',
                      )}
                    >
                      {isPast ? <Check className="h-5 w-5" strokeWidth={3} /> : s.node}
                      {isActive && (
                        <motion.span
                          layoutId="finder-active-ring"
                          className="absolute inset-0 rounded-2xl ring-2 ring-brand-300"
                          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                      )}
                    </div>
                    {/* label */}
                    <div className="flex flex-1 items-center justify-between">
                      <span
                        className={cn(
                          'font-sans text-xl font-medium transition-colors duration-300 sm:text-2xl',
                          isActive ? 'text-ink-500' : 'text-ink-400 group-hover:text-ink-500',
                        )}
                      >
                        {s.label}
                      </span>
                      <ArrowRight
                        className={cn(
                          'h-4 w-4 transition-all duration-300',
                          isActive ? 'text-brand-500 opacity-100' : 'text-white/20 opacity-0 group-hover:opacity-50',
                        )}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Recommendation panel */}
          <div className="relative lg:sticky lg:top-28 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#131F3D] to-[#0E1830] p-8 shadow-[0_24px_70px_-28px_rgba(47,107,255,0.3)] sm:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-50 blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.18), transparent 70%)' }}
                />
                <div className="relative flex flex-col gap-5">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Recommended
                  </span>
                  <h3 className="font-sans text-3xl font-medium tracking-tight text-ink-500 sm:text-4xl">
                    {current.recommendation}
                  </h3>
                  <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {current.explanation}
                  </p>
                  <ul className="flex flex-col gap-3 pt-1">
                    {current.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-ink-500">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/15 text-teal-300">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3">
                    <CTAButton href="/contact" variant="primary">
                      Request Support
                    </CTAButton>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const reasons = [
  {
    num: '01',
    title: 'An Extension of Your Team',
    body: 'We work inside your systems, templates and documented processes, ensuring a seamless experience without disrupting existing workflows.',
    accent: 'rgba(47,107,255,0.12)',
  },
  {
    num: '02',
    title: 'Capacity Without Headcount',
    body: 'Increase or reduce support based on workload without recruitment, onboarding delays or long-term staffing commitments.',
    accent: 'rgba(79,70,229,0.12)',
  },
  {
    num: '03',
    title: 'Operational Discipline',
    body: 'Every task follows documented checklists, verification processes and agreed turnaround times to ensure consistency and accuracy.',
    accent: 'rgba(6,182,212,0.12)',
  },
  {
    num: '04',
    title: 'Clear Reporting',
    body: 'Receive structured reports and status updates at the cadence that suits your organisation, ensuring complete visibility.',
    accent: 'rgba(16,185,129,0.12)',
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function WhyTrackOneEditorial() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <motion.div
        style={{ y }}
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 font-display text-[18rem] font-medium leading-none text-white/[0.04] sm:text-[26rem]"
      >
        Why
      </motion.div>

      <div className="container-px relative z-10" ref={ref}>
        {/* Section intro — oversized */}
        <div className="mb-24 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600"
          >
            <span className="h-px w-6 bg-current opacity-60" />
            Why TrackOne
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, ease: easeOut }}
            className="mt-6 font-display text-[2.5rem] leading-[1.08] tracking-[-0.025em] text-ink-500 sm:text-6xl lg:text-[4.75rem] lg:leading-[1.04]"
          >
            Support Built Around How
            <br />
            <span className="gradient-text italic">IP Teams Actually Work.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            We remove the administrative burden from your team while maintaining complete
            transparency, structured workflows and consistent execution inside your existing
            systems.
          </motion.p>
        </div>

        {/* Reasons — alternating editorial rows, no cards */}
        <div className="flex flex-col gap-20 sm:gap-28">
          {reasons.map((r, i) => {
            const reversed = i % 2 === 1;
            return (
              <div key={r.num} className="relative">
                <div
                  className={`grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16 ${
                    reversed ? 'lg:[&>*:first-child]:order-2 lg:justify-items-end' : ''
                  }`}
                >
                  {/* Oversized number */}
                  <div className="relative">
                    <span
                      className="font-display text-[6rem] font-medium leading-none tracking-tight sm:text-[8rem]"
                      style={{ color: r.accent.replace('0.12', '0.35') }}
                    >
                      {r.num}
                    </span>
                    {/* accent underline */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
                      className="mt-2 h-1 w-16 origin-left rounded-full"
                      style={{ background: r.accent.replace('0.12', '0.5') }}
                    />
                  </div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-12%' }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
                    className={reversed ? 'lg:text-right' : ''}
                  >
                    <h3 className="font-display text-3xl leading-[1.1] tracking-[-0.02em] text-ink-500 sm:text-4xl">
                      {r.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${
                        reversed ? 'lg:ml-auto' : ''
                      }`}
                    >
                      {r.body}
                    </p>
                  </motion.div>
                </div>

                {/* divider */}
                {i < reasons.length - 1 && (
                  <div className="mt-20 h-px w-full bg-ink/8 sm:mt-28" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

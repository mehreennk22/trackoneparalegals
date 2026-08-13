'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';

const stages = [
  {
    num: '01',
    title: 'Scope',
    body: 'We understand your workflows, task volumes, priorities and expected turnaround times.',
  },
  {
    num: '02',
    title: 'Onboard',
    body: 'We integrate into your systems, templates and documented processes.',
  },
  {
    num: '03',
    title: 'Execute',
    body: 'Your assigned support team delivers work using agreed procedures and timelines.',
  },
  {
    num: '04',
    title: 'Review',
    body: 'Regular reporting, quality checks and continuous refinement as your requirements evolve.',
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ProcessWorkflow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });

  const lineScale = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });
  const docY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const docOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section id="process" className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.15), transparent 70%)' }}
      />
      <div className="container-px relative z-10">
        <SectionHeading
          eyebrow="Our Process"
          title="A Clear Path From First Task To Steady Support"
          description="A document moves through four stages — watch it travel the pipeline as you scroll."
          className="mb-20"
        />

        <div ref={ref} className="relative">
          {/* Horizontal track */}
          <div className="relative mb-16 hidden lg:block">
            <div className="absolute left-0 right-0 top-[3.25rem] h-px bg-ink/8" />
            <motion.div
              style={{ scaleX: lineScale }}
              className="absolute left-0 top-[3.25rem] h-px origin-left bg-gradient-to-r from-brand-500 via-iris-500 to-teal-500"
            />

            {/* Moving document */}
            <motion.div
              style={{ left: useTransform(scrollYProgress, [0, 1], ['0%', '100%']), opacity: docOpacity }}
              className="absolute top-[2.25rem] z-20 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-1.5 rounded-lg border border-ink/8 bg-white px-2.5 py-1.5 shadow-lg"
              >
                <span className="h-2 w-2 rounded-sm bg-brand-500" />
                <span className="h-1.5 w-8 rounded-full bg-ink/10" />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-4 gap-6">
              {stages.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.7, ease: easeOut, delay: i * 0.12 }}
                  className="relative flex flex-col items-start"
                >
                  {/* node */}
                  <div className="relative z-10 mb-6 flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: easeOut, delay: i * 0.12 + 0.2 }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-[0_8px_24px_-12px_rgba(47,107,255,0.4)]"
                    >
                      {/* mini workflow icon */}
                      <WorkflowIcon index={i} />
                    </motion.div>
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink-500 text-[10px] font-semibold text-white">
                      {s.num}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink-500">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile / tablet vertical version */}
          <div className="flex flex-col gap-8 lg:hidden">
            {stages.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: easeOut, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink/10 bg-white shadow-sm">
                  <WorkflowIcon index={i} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-ink-500 text-[9px] font-semibold text-white">
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink-500">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Custom mini workflow icons per stage */
function WorkflowIcon({ index }: { index: number }) {
  const color = ['#2F6BFF', '#4F46E5', '#06B6D4', '#10B981'][index];
  return (
    <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
      {index === 0 && (
        <>
          <circle cx="16" cy="20" r="9" stroke={color} strokeWidth="2" />
          <motion.line x1="23" y1="20" x2="34" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          <path d="M30 16 l4 4 l-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
      )}
      {index === 1 && (
        <>
          <rect x="8" y="10" width="24" height="20" rx="4" stroke={color} strokeWidth="2" />
          <motion.path d="M14 20 l4 4 l8 -8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
            animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }} />
        </>
      )}
      {index === 2 && (
        <>
          <motion.circle cx="20" cy="20" r="10" stroke={color} strokeWidth="2" fill="none"
            animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '20px 20px' }} />
          <path d="M20 12 v4 M20 24 v4 M12 20 h4 M24 20 h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {index === 3 && (
        <>
          <rect x="10" y="10" width="20" height="20" rx="4" stroke={color} strokeWidth="2" />
          <motion.line x1="14" y1="16" x2="26" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} />
          <motion.line x1="14" y1="20" x2="24" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          <motion.line x1="14" y1="24" x2="22" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"
            animate={{ pathLength: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.8 }} />
        </>
      )}
    </svg>
  );
}

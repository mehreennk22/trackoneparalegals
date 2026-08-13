'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { BlurReveal, FadeUp } from '@/components/ui/motion';

const articles = [
  {
    featured: true,
    title: 'Clearing a Docket Backlog Without Adding Headcount',
    excerpt:
      'How structured outsourced capacity helps eliminate backlogs without increasing permanent headcount.',
    date: 'Jun 2025',
    read: '6 min read',
    category: 'Operations',
  },
  {
    featured: false,
    title: 'Building a Renewal Process That Doesn’t Miss',
    excerpt: 'A practical framework for renewal tracking that prevents lapses before they happen.',
    date: 'May 2025',
    read: '5 min read',
    category: 'Renewals',
  },
  {
    featured: false,
    title: 'What to Outsource First in IP Administration',
    excerpt: 'Prioritising the tasks that deliver the fastest operational relief for your team.',
    date: 'Apr 2025',
    read: '4 min read',
    category: 'Strategy',
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function InsightsMagazine() {
  const [featured, ...secondary] = articles;
  return (
    <section id="insights" className="relative bg-canvas-alt py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Insights"
          title="Latest Insights on IP Operations"
          description="Practical perspectives on running IP administration with discipline and capacity."
          className="mb-20"
        />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* Featured — large editorial */}
          <FadeUp>
            <a href="#" className="group relative block">
              {/* visual area */}
              <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[2rem] border border-ink/8 bg-gradient-to-br from-brand-50 via-white to-teal-50">
                <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-50 blur-3xl"
                  style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.2), transparent 70%)' }}
                />
                {/* large number */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: easeOut }}
                  className="absolute bottom-6 left-8 font-display text-[7rem] font-medium leading-none text-white/10 sm:text-[9rem]"
                >
                  01
                </motion.span>
                {/* animated SVG lines */}
                <svg viewBox="0 0 400 250" className="absolute right-8 top-8 h-24 w-24" fill="none">
                  <motion.path
                    d="M20 200 C 80 80, 200 220, 380 60" stroke="url(#ins-grad)" strokeWidth="2" strokeLinecap="round"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: easeOut }}
                  />
                  <defs>
                    <linearGradient id="ins-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#2F6BFF" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-brand-600">{featured.category}</span>
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {featured.read}
                  </span>
                </div>
                <h3 className="max-w-xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink-500 transition-colors duration-300 group-hover:text-brand-600 sm:text-5xl">
                  {featured.title}
                </h3>
                <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  <span className="link-underline">Read article</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Secondary — minimal text rows */}
          <div className="flex flex-col gap-px">
            {secondary.map((a, i) => (
              <FadeUp key={a.title} delay={0.15 * (i + 1)}>
                <a href="#" className="group block border-t border-ink/8 py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                    <span className="rounded-full bg-canvas px-2.5 py-0.5 text-ink-500">{a.category}</span>
                    <span>{a.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {a.read}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium leading-tight tracking-tight text-ink-500 transition-colors duration-300 group-hover:text-brand-600 sm:text-3xl">
                    {a.title}
                  </h3>
                  <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    <span className="link-underline">Read</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

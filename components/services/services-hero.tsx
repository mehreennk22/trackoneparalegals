'use client';

import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { FadeUp, BlurReveal } from '@/components/ui/motion';
import { serviceCategories } from '@/lib/services';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ServicesHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-canvas pb-20 pt-32 sm:pt-40 lg:pb-28">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(47,107,255,0.16), rgba(79,70,229,0.08) 45%, transparent 70%)',
        }}
      />

      <div className="container-px relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-600">
              <span className="h-px w-8 bg-current opacity-60" />
              Our Services
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-ink-500 sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
              Outsourced IP Support,
              <br className="hidden sm:block" />{' '}
              <span className="gradient-text italic">Scoped Around Your Workflows</span>
            </h1>
          </BlurReveal>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-[15px] leading-[1.7] tracking-[-0.005em] text-muted-foreground sm:text-lg sm:leading-[1.7]">
              Whether you need ongoing operational support or additional capacity during busy
              periods, TrackOne provides experienced administrative and paralegal support tailored
              to your organisation.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href="/contact" variant="primary">
                Request Support
              </CTAButton>
              <CTAButton href="#paralegal" variant="light" showArrow={false}>
                Explore Services
              </CTAButton>
            </div>
          </FadeUp>
        </div>

        {/* Category overview cards */}
        <div className="mt-20 grid gap-4 sm:grid-cols-3">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.7, ease: easeOut, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-[#111E3B] p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(47,107,255,0.25)]"
            >
              <h3 className="font-display text-xl leading-tight text-ink-500">{cat.name}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-ink-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

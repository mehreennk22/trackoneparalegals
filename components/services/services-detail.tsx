'use client';

import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { services, type Service } from '@/lib/services';
import { CTAButton } from '@/components/ui/cta-button';
import { FadeUp, BlurReveal } from '@/components/ui/motion';
import { serviceIllustrations } from './service-illustrations';
import { cn } from '@/lib/utils';

const easeOut = [0.22, 1, 0.36, 1] as const;

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const reversed = index % 2 === 1;
  const Art = serviceIllustrations[index];

  return (
    <article id={service.slug} className="scroll-mt-28">
      <div
        className={cn(
          'grid items-center gap-12 lg:grid-cols-2 lg:gap-20',
          reversed && 'lg:[&>*:first-child]:order-2',
        )}
      >
        {/* Illustration side */}
        <FadeUp>
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-ink/8 bg-gradient-to-br from-canvas-alt to-white p-6 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(47,107,255,0.22)] sm:p-10">
            <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.15), transparent 70%)' }}
            />
            <div className="relative flex h-full w-full items-center justify-center">
              <Art />
            </div>
            {/* index marker */}
            <span className="absolute bottom-5 left-6 font-display text-5xl text-white/10 sm:text-6xl">
              0{index + 1}
            </span>
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-500 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              {service.category}
            </div>
          </div>
        </FadeUp>

        {/* Content side */}
        <div className="flex flex-col gap-7">
          <BlurReveal>
            <h3 className="font-display text-3xl leading-[1.1] tracking-[-0.02em] text-ink-500 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              {service.title}
            </h3>
          </BlurReveal>

          <FadeUp delay={0.08}>
            <p className="max-w-lg text-pretty text-[15px] leading-[1.7] tracking-[-0.005em] text-muted-foreground sm:text-lg sm:leading-[1.7]">
              {service.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <div>
              <h4 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                Benefits
              </h4>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-500">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div>
              <h4 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
                Typical Deliverables
              </h4>
              <ul className="flex flex-col gap-2.5">
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#111E3B] px-4 py-3 text-sm leading-relaxed text-ink-500 transition-colors duration-200 hover:border-brand-300 hover:bg-brand-500/10"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          <FadeUp delay={0.26}>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <CTAButton href="/contact" variant="primary">
                Request Support
              </CTAButton>
              <CTAButton href="#top" variant="ghost" showArrow={false}>
                Learn More
              </CTAButton>
            </div>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}

export function ServicesDetail() {
  return (
    <section className="bg-canvas pb-24 pt-8 sm:pb-32">
      <div className="container-px">
        <div className="flex flex-col gap-24 sm:gap-32">
          {services.map((s, i) => (
            <ServiceBlock key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

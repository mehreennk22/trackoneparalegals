'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { services, type Service } from '@/lib/services';
import { CTAButton } from '@/components/ui/cta-button';
import { FadeUp, BlurReveal } from '@/components/ui/motion';
import { serviceIllustrations } from './service-illustrations';
import { cn } from '@/lib/utils';

const easeOut = [0.22, 1, 0.36, 1] as const;

function PackageAccordionItem({ pkg }: { pkg: { title: string; details: string[] } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111E3B] transition-colors duration-200 hover:border-brand-300">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium leading-relaxed text-ink-500">{pkg.title}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300',
            open && 'rotate-180 text-brand-400',
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            <ul className="flex flex-col gap-2 px-4 pb-4 pt-0.5">
              {pkg.details.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#111E3B] to-[#0B1120] p-6 transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(47,107,255,0.3)] sm:p-10">
          <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.15), transparent 70%)' }}
            />
            <div className="relative flex h-full w-full items-center justify-center">
              <Art />
            </div>
            <span className="absolute bottom-5 left-6 font-display text-5xl text-white/10 sm:text-6xl">
              0{index + 1}
            </span>
            <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full bg-[#111E3B]/80 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              {service.category}
            </div>
          </div>
        </FadeUp>

        {/* Content side */}
        <div className="flex flex-col gap-7">
          <BlurReveal>
            <h3 className="font-sans text-3xl leading-[1.1] tracking-[-0.02em] text-ink-500 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
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
                Services
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
                Packages Offered
              </h4>
              <div className="flex flex-col gap-2.5">
                {service.deliverables.map((pkg) => (
                  <PackageAccordionItem key={pkg.title} pkg={pkg} />
                ))}
              </div>
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
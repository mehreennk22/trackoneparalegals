'use client';

import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { Stagger, StaggerItem } from '@/components/ui/motion';
import { cn } from '@/lib/utils';

const kpis = [
  { value: 6, suffix: '+', label: 'Support Services' },
  { value: 100, suffix: '%', label: 'Work Inside Your Systems' },
  { value: 24, suffix: '/7', label: 'Coverage Models' },
  { value: 0, suffix: '', label: 'Recruitment Overhead' },
];

export function Stats() {
  return (
    <section className="relative bg-canvas py-16 sm:py-20">
      <div className="container-px">
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {kpis.map((k, i) => (
            <StaggerItem key={k.label}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 sm:p-8',
                  'shadow-[0_1px_3px_rgba(8,21,34,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(47,107,255,0.25)]',
                )}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.25), transparent 70%)' }}
                />
                <div className="relative">
                  <div className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-6xl">
                    <AnimatedCounter to={k.value} suffix={k.suffix} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-muted-foreground">{k.label}</div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-500 to-teal-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-[2rem] glass p-10 shadow-[0_30px_80px_-30px_rgba(47,107,255,0.25)] sm:p-14"
          >
            {/* soft glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-50 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.2), transparent 70%)' }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full opacity-40 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.18), transparent 70%)' }}
            />

            <Quote className="relative h-12 w-12 text-brand-500/30" strokeWidth={1} />
            <blockquote className="relative mt-6 font-sans text-2xl font-medium leading-snug tracking-tight text-ink-500 sm:text-[2rem] sm:leading-[1.3]">
              “Flexible capacity when we need it without the overhead of hiring. Straightforward to
              work with and consistently reliable.”
            </blockquote>
            <div className="relative mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-iris-500 font-sans text-lg font-semibold text-white">
                P
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-500">Placeholder Client</div>
                <div className="text-xs text-muted-foreground">Practice Manager</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

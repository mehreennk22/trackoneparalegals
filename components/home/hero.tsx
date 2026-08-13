'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CTAButton } from '@/components/ui/cta-button';
import { HeroDashboard } from './hero-dashboard';
import { ShieldCheck } from 'lucide-react';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas pb-20 pt-32 sm:pb-28 lg:pb-32 lg:pt-40"
    >
      {/* Background layers */}
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(47,107,255,0.14), rgba(79,70,229,0.07) 45%, transparent 70%)',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container-px relative z-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
      >
        {/* Left */}
        <div className="flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-500 backdrop-blur"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-teal-500" />
            Outsourced IP Operations
          </motion.span>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[2.75rem] leading-[1.05] tracking-[-0.025em] text-ink-500 sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.05 }}
                className="block"
              >
                Outsourced IP Administration
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeOut, delay: 0.15 }}
                className="block"
              >
                <span className="gradient-text">& Paralegal Support</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.25 }}
              className="font-display text-2xl italic leading-tight text-ink-500/80 sm:text-3xl"
            >
              Your IP Admin, Handled. So Your Team Can Focus.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.35 }}
              className="max-w-xl text-pretty text-[15px] leading-[1.7] tracking-[-0.005em] text-muted-foreground sm:text-lg sm:leading-[1.7]"
            >
              TrackOne Paralegals provides outsourced IP administrative and paralegal support
              including docketing, renewals, records management and administrative support, working
              as an extension of your existing legal team.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOut, delay: 0.45 }}
            className="flex flex-wrap items-center gap-3"
          >
            <CTAButton href="/contact" variant="primary">
              Request Support
            </CTAButton>
            <CTAButton href="/services" variant="light">
              Explore Services
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-2 pt-2 text-xs text-muted-foreground"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-teal-500" />
            TrackOne is not a law firm and does not provide legal advice.
          </motion.div>
        </div>

        {/* Right — animated dashboard */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.3 }}
          className="relative"
        >
          <HeroDashboard />
        </motion.div>
      </motion.div>
    </section>
  );
}

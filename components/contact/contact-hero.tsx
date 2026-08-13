'use client';

import { motion } from 'framer-motion';
import { BlurReveal, FadeUp } from '@/components/ui/motion';
import { Mail } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-canvas pb-12 pt-32 sm:pt-40">
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[940px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(47,107,255,0.16), rgba(6,182,212,0.1) 45%, transparent 70%)',
        }}
      />
      <div className="container-px relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <BlurReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-ink-500 backdrop-blur">
              <Mail className="h-3.5 w-3.5 text-brand-500" />
              Contact
            </span>
          </BlurReveal>
          <BlurReveal delay={0.1}>
            <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.04] tracking-tight text-ink-500 sm:text-6xl lg:text-[4.2rem]">
              Let’s Talk About Your{' '}
              <span className="gradient-text">IP Operations</span>
            </h1>
          </BlurReveal>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tell us which tasks you’d like to hand over and we’ll recommend the right support
              model.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

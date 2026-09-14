'use client';

import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui/cta-button';
import { BlurReveal, FadeUp } from '@/components/ui/motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-500 py-28 text-white sm:py-36">
      {/* animated mesh gradient */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="absolute -left-20 top-0 h-[500px] w-[500px] animate-mesh-drift rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.5), transparent 70%)' }}
        />
        <div
          className="absolute right-0 top-1/4 h-[400px] w-[400px] animate-mesh-drift rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.45), transparent 70%)', animationDelay: '3s' }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[350px] w-[350px] animate-mesh-drift rounded-full opacity-40 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%)', animationDelay: '6s' }}
        />
      </motion.div>
      <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden />

      {/* floating shapes */}
      {[
        { left: '12%', top: '20%', size: 60, delay: 0 },
        { left: '82%', top: '30%', size: 80, delay: 1.5 },
        { left: '70%', top: '75%', size: 50, delay: 3 },
        { left: '20%', top: '70%', size: 70, delay: 4.5 },
      ].map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={{ y: [0, -24, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 14 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}
          className="absolute rounded-2xl border border-white/10"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
          }}
        />
      ))}

      <div className="container-px relative z-10 flex flex-col items-center text-center">
        <BlurReveal>
          <h2 className="font-sans text-4xl leading-[1.06] tracking-[-0.025em] sm:text-6xl lg:text-[4.75rem] lg:leading-[1.03]">
            Hand Over the Admin.
            <br />
            <span className="gradient-text italic">Keep the Control.</span>
          </h2>
        </BlurReveal>
        <FadeUp delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-[15px] leading-[1.7] tracking-[-0.005em] text-white/70 sm:text-lg sm:leading-[1.7]">
            Tell us which administrative tasks are slowing your team down and we’ll recommend a
            support model tailored to your workflows.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTAButton href="/contact" variant="primary">
              Request Support
            </CTAButton>
            <CTAButton href="/services" variant="light" className="border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30">
              Explore Services
            </CTAButton>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { FadeUp, BlurReveal } from './motion';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-7',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <FadeUp>
          <span
            className={cn(
              'inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]',
              dark ? 'text-teal-300' : 'text-brand-600',
            )}
          >
            <span className="h-px w-8 bg-current opacity-60" />
            {eyebrow}
          </span>
        </FadeUp>
      )}
      <BlurReveal>
        <h2
          className={cn(
            'font-sans text-[2.75rem] leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.06]',
            dark ? 'text-white' : 'text-ink-500',
            align === 'center' && 'text-balance',
          )}
        >
          {title}
        </h2>
      </BlurReveal>
      {description && (
        <FadeUp delay={0.1}>
          <p
            className={cn(
              'max-w-2xl text-pretty text-[15px] leading-[1.7] tracking-[-0.005em] sm:text-lg sm:leading-[1.7]',
              dark ? 'text-white/70' : 'text-muted-foreground',
              align === 'center' && 'mx-auto',
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}

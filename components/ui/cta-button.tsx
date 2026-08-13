'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from './magnetic-button';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'dark' | 'ghost' | 'light';

const styles: Record<Variant, string> = {
  primary:
    'bg-brand-500 text-white shadow-[0_8px_24px_-8px_rgba(47,107,255,0.55)] hover:bg-brand-600 hover:shadow-[0_14px_36px_-8px_rgba(47,107,255,0.6)]',
  dark: 'bg-ink-500 text-white hover:bg-ink-600 shadow-[0_8px_24px_-8px_rgba(8,21,34,0.4)]',
  light:
    'bg-transparent text-white border border-white/20 hover:border-brand-400 hover:bg-white/5',
  ghost:
    'text-ink-500 border border-ink/15 hover:border-ink/30 hover:bg-white/[0.03]',
};

export function CTAButton({
  children,
  href = '/contact',
  variant = 'primary',
  className,
  showArrow = true,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <MagneticButton
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300',
        styles[variant],
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </MagneticButton>
  );
}

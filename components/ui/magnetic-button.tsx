'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

export function MagneticButton({
  children,
  href,
  className,
  strength = 0.35,
  onClick,
  type = 'button',
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });
  const innerX = useTransform(sx, (v) => v * 0.5);
  const innerY = useTransform(sy, (v) => v * 0.5);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const motionStyle = { x: sx, y: sy };

  const inner = (
    <motion.span style={{ x: innerX, y: innerY }} className="relative z-10 inline-flex items-center">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={motionStyle}
        className={cn('relative inline-flex', className)}
      >
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={motionStyle}
      className={cn('relative inline-flex', className)}
    >
      {inner}
    </motion.button>
  );
}

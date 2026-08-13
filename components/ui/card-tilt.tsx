'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

export function CardTilt({
  children,
  className,
  max = 8,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(0.5);
  const gy = useMotionValue(0.5);

  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  const rotateX = useTransform(srx, [-max, max], [max, -max]);
  const rotateY = useTransform(sry, [-max, max], [-max, max]);

  const glareBg = useTransform(
    [gx, gy],
    ([x, y]: number[]) =>
      `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18), transparent 60%)`,
  );

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rx.set((py - 0.5) * 2 * max);
    ry.set((px - 0.5) * 2 * max);
    gx.set(px);
    gy.set(py);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    gx.set(0.5);
    gy.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn('relative [perspective:1000px]', className)}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          style={{ background: glareBg }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.group:hover_&]:opacity-100"
        />
      )}
    </motion.div>
  );
}

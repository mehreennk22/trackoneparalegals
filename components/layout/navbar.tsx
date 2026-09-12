'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { useContactModal } from '@/components/contact/contact-modal-context';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Pricing', href: '/pricing' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
      >
        <nav
          className={cn(
            'flex w-full max-w-[1180px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5',
            'glass shadow-[0_8px_30px_-12px_rgba(8,21,34,0.12)]',
          )}
        >
          <Link href="/" className="group flex items-center gap-2.5" aria-label="TrackOne Paralegals home">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <img src="/trackone-icon.png" alt="TrackOne Paralegals" className="h-9 w-9 object-contain" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal-400 ring-2 ring-white/80" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight text-ink-500">TrackOne</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Paralegals
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'link-underline relative px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-ink-500' : 'text-muted-foreground hover:text-ink-500',
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <MagneticButton
              onClick={openModal}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-10px_rgba(47,107,255,0.6)] transition-all duration-300 hover:bg-brand-600"
            >
              Request Support
            </MagneticButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-500 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-px flex h-full flex-col justify-center gap-2 pt-20">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className="block border-b border-border py-5 font-display text-3xl font-medium text-ink-500"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <MagneticButton
                  onClick={() => {
                    setOpen(false);
                    openModal();
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 text-base font-semibold text-white"
                >
                  Request Support
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
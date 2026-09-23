'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Blogs', href: '/blogs' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Paralegal Support', href: '/services#paralegal' },
      { label: 'Docketing Support', href: '/services#docketing' },
      { label: 'Maintenance & Renewals', href: '/services#renewals' },
      { label: 'Administrative Support', href: '/services#administrative' },
      { label: 'Drawings', href: '/services#drawings' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Our Process', href: '/#process' },
      { label: 'Support Finder', href: '/#finder' },
      
    ],
  },
];

export function Footer() {
  return (
   <footer className="relative overflow-hidden bg-[#070D1A] text-white">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.4), transparent 70%)' }}
      />
      <div className="dot-grid-dark absolute inset-0 opacity-40" aria-hidden />

      <div className="container-px relative z-10 py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2.5" aria-label="TrackOne Paralegals home">
              <span className="relative flex h-10 w-10 items-center justify-center">
  <img src="/trackone-icon.png" alt="TrackOne Paralegals" className="h-10 w-10 object-contain" />
  <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-teal-400 ring-2 ring-[#070D1A]" />
</span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-tight">TrackOne</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Paralegals
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              Outsourced intellectual property administrative and paralegal support — working as an
              extension of your existing legal team.
            </p>
            <a
              href="mailto:hello@trackoneparalegals.com"
              className="group inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-teal-300" />
              <span className="link-underline">hello@trackoneparalegals.com</span>
            </a>
            <div className="flex items-center gap-3 pt-1">
              {[FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.linkedin.com/company/trackone-paralegals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}

            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
                    >
                      <span className="link-underline">{l.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
          <p className="text-pretty text-xs leading-relaxed text-white/50">
            TrackOne Paralegals is not a law firm and does not provide legal advice. All legal advice
            remains the responsibility of qualified legal professionals.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} TrackOne Paralegals. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Use', href: '/terms' },
              { label: 'Disclaimer', href: '#' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-white/50 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
             
          </div>
        </div>
      </div>
    </footer>
  );
}

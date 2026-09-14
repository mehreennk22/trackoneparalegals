'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Mail, MapPin, Clock, ArrowRight, Calendar } from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { cn } from '@/lib/utils';

const supportOptions = [
  'Paralegal Support',
  'Docketing Support',
  'Maintenance & Renewal Fees',
  'Administrative Support',
  'Drawings',
  'Customised Support Package',
  'Not Sure Yet',
];

const easeOut = [0.22, 1, 0.36, 1] as const;

function FloatingField({
  id,
  label,
  type = 'text',
  as = 'input',
  required,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  type?: string;
  as?: 'input' | 'textarea' | 'select';
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options?: string[];
}) {
  const hasValue = value.length > 0;
  return (
    <div className="relative">
      {as === 'input' && (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          className="glass-input peer h-14 w-full rounded-xl px-4 pt-5 text-sm text-ink-500 outline-none"
        />
      )}
      {as === 'textarea' && (
        <textarea
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          rows={4}
          className="glass-input peer w-full rounded-xl px-4 pt-6 text-sm text-ink-500 outline-none"
        />
      )}
      {as === 'select' && (
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="glass-input peer h-14 w-full appearance-none rounded-xl px-4 pt-5 text-sm text-ink-500 outline-none"
        >
          <option value="" disabled></option>
          {options?.map((o) => (
            <option key={o} value={o} className="text-ink-500">
              {o}
            </option>
          ))}
        </select>
      )}
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 origin-left text-sm text-muted-foreground transition-all duration-200',
          (hasValue || as === 'select') && 'top-3.5 -translate-y-0 text-xs',
          hasValue && 'text-brand-400',
          'peer-focus:top-2.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-brand-400',
          as === 'textarea' && 'top-6',
          (hasValue || as === 'select') && as === 'textarea' && 'top-2.5',
        )}
      >
        {label}
        {required && <span className="text-brand-500"> *</span>}
      </label>
      {as === 'select' && (
        <ArrowRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-muted-foreground" />
      )}
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    support: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
  const data = await res.json().catch(() => ({}));
  throw new Error(data.error || 'Failed to send');
}
    setSubmitted(true);
    } catch (err: any) {
    setError(err?.message || 'Something went wrong. Please email us directly at hello@trackoneparalegals.com.');
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-[2rem] glass p-6 shadow-[0_30px_80px_-30px_rgba(47,107,255,0.25)] sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(47,107,255,0.18), transparent 70%)' }}
        />

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="relative flex min-h-[420px] flex-col items-center justify-center text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-brand-500 text-white shadow-[0_20px_50px_-12px_rgba(6,182,212,0.5)]"
              >
                <motion.span
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Check className="h-10 w-10" strokeWidth={3} />
                </motion.span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 font-sans text-3xl font-medium tracking-tight text-ink-500"
              >
                Thank you — message received.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-3 max-w-sm text-pretty text-sm text-muted-foreground"
              >
                We’ll review your requirements and recommend the right support model. Expect a
                reply shortly.
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', company: '', email: '', phone: '', support: '', message: '' });
                }}
                className="mt-8 text-sm font-semibold text-brand-600 link-underline"
              >
                Send another message
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingField id="name" label="Full Name" required value={form.name} onChange={set('name')} />
                <FloatingField id="company" label="Company" value={form.company} onChange={set('company')} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FloatingField id="email" label="Email" type="email" required value={form.email} onChange={set('email')} />
                <FloatingField id="phone" label="Phone" type="tel" value={form.phone} onChange={set('phone')} />
              </div>
              <FloatingField
                id="support"
                label="Support Required"
                as="select"
                required
                value={form.support}
                onChange={set('support')}
                options={supportOptions}
              />
              <FloatingField id="message" label="Message" as="textarea" required value={form.message} onChange={set('message')} />
              {error && (
                <p className="text-xs font-medium text-red-400">{error}</p>
              )}
              <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
                <MagneticButton
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(47,107,255,0.6)] transition-all hover:bg-brand-600 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </MagneticButton>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function ContactInfo() {
  const items = [
    { icon: Mail, label: 'Email', value: 'hello@trackoneparalegals.com', href: 'mailto:hello@trackoneparalegals.com' },
    { icon: Clock, label: 'Response Time', value: '24-48 hours' },
    { icon: Calendar, label: 'Schedule a Call', value: 'Book a slot', href: 'https://calendly.com/shahzina-trackoneparalegals' },
  ];
  return (
    <div className="flex flex-col gap-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div key={it.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#111E3B] p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-alt">
              <Icon className="h-5 w-5 text-brand-600" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {it.label}
              </div>
              {it.href ? (
                <a
                  href={it.href}
                  target={it.href.startsWith('http') ? '_blank' : undefined}
                  rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="link-underline block truncate text-sm font-medium text-white"
                >
                  {it.value}
                </a>
              ) : (
                <div className="truncate text-sm font-medium text-white">{it.value}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
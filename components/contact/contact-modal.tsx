'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { ContactForm, ContactInfo } from '@/components/contact/contact-form';
import { useContactModal } from './contact-modal-context';

const easeOut = [0.22, 1, 0.36, 1] as const;

export function ContactModal() {
  const { open, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040810]/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: easeOut }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0B1120] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]"
            style={{ maxHeight: '92vh' }}
          >
            {/* Sticky header */}
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-6 py-5 sm:px-8">
              <div>
                <h2 className="font-sans text-xl font-medium tracking-tight text-white sm:text-2xl">
                  Request Support
                </h2>
                <p className="mt-1 text-pretty text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Tell us which tasks you&apos;d like to hand over and we&apos;ll recommend the
                  right support model.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#111E3B] text-white transition-colors hover:bg-[#182852]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
                <ContactForm />
                <ContactInfo />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
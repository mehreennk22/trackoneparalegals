'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type ContactModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactModalContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return ctx;
}
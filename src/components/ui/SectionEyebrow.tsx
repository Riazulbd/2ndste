import type { ReactNode } from 'react';

interface SectionEyebrowProps {
  children: ReactNode;
}

export const SectionEyebrow = ({ children }: SectionEyebrowProps) => {
  return (
    <p className="mb-5 inline-flex w-fit border border-brand-border px-3 py-1 font-martian text-[11px] uppercase tracking-[0.22em] text-brand-accent">
      {children}
    </p>
  );
};

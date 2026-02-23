import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={`rounded-sm border border-brand-border bg-brand-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-borderHover hover:bg-brand-cardHover hover:shadow-accent ${className ?? ''}`}
    >
      {children}
    </article>
  );
};

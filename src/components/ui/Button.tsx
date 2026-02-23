import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  fullWidth?: boolean;
}

const baseClasses =
  'inline-flex min-h-12 items-center justify-center border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none';

const variantClasses = {
  primary:
    'border-brand-accent bg-brand-accent text-brand-bgPrimary hover:shadow-accent hover:-translate-y-0.5',
  secondary:
    'border-brand-borderHover bg-transparent text-brand-accent hover:border-brand-accent hover:bg-brand-accent/10',
};

export const Button = ({ children, variant = 'primary', to, fullWidth, className, ...props }: ButtonProps) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className ?? ''}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

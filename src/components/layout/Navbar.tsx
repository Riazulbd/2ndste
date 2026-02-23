import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'What I Do', path: '/#services' },
  { label: 'Results', path: '/#results' },
  { label: 'Fit Check', path: '/#fit' },
  { label: 'Contact', path: '/#contact' },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const target = document.getElementById('top-sentinel');
    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.98 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-brand-border bg-brand-bgPrimary/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link to="/" className="font-fraunces text-xl font-semibold italic tracking-wide text-brand-accent">
            RIAZUL
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="inline-flex min-h-12 items-center font-cabinet text-[11px] uppercase tracking-[0.24em] text-brand-textTertiary transition-colors hover:text-brand-accent"
              >
                {item.label}
              </Link>
            ))}
            <Button to="/#contact" variant="secondary" className="px-4 py-2 text-[11px]" aria-label="Let's talk revenue">
              Let&apos;s Talk Revenue
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-12 w-12 items-center justify-center border border-brand-border text-brand-textPrimary md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-brand-bgPrimary/98 px-8 pt-28 transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="inline-flex min-h-12 items-center font-cabinet text-lg uppercase tracking-[0.16em] text-brand-textPrimary"
            >
              {item.label}
            </Link>
          ))}
          <Button to="/#contact" className="mt-4 justify-center">
            Let&apos;s Talk Revenue
          </Button>
        </nav>
      </div>
    </>
  );
};

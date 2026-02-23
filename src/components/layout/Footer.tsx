export const Footer = () => {
  return (
    <footer className="border-t border-brand-border bg-brand-bgPrimary py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-10">
        <p className="font-cabinet text-sm text-brand-textSecondary">© 2025 Riazul Islam. Revenue Systems Architect.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-12 w-12 items-center justify-center border border-brand-border text-brand-textTertiary transition-colors hover:border-brand-borderHover hover:text-brand-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 7.5A1.44 1.44 0 1 1 6.94 4.6a1.44 1.44 0 0 1 0 2.9ZM5.8 19.4h2.3v-9.1H5.8v9.1Zm5.5 0h2.3v-4.7c0-1.2.2-2.3 1.8-2.3 1.5 0 1.5 1.4 1.5 2.4v4.6h2.3v-5.1c0-2.5-.5-4.4-3.5-4.4-1.4 0-2.4.8-2.8 1.6h-.1v-1.4h-2.2v9.3Z" />
            </svg>
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="inline-flex h-12 w-12 items-center justify-center border border-brand-border text-brand-textTertiary transition-colors hover:border-brand-borderHover hover:text-brand-accent"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 6.5v5.1c0 1.7-.9 2.8-2.3 2.8-1.4 0-2.3-1.1-2.3-2.8V6.5H9.7v5c0 3 2 5 4.6 5 2.7 0 4.6-2 4.6-5v-5h-2.3Zm-9.2 0H5.1v5.2c0 1.5-.7 2.6-2 2.6-.3 0-.5 0-.8-.1v2.2c.3.1.8.2 1.3.2 2.3 0 4.1-1.8 4.1-4.8V6.5Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export const GeometricBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute left-[8%] top-[18%] h-24 w-24 animate-float text-brand-accent/10 will-change-transform"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute right-[12%] top-[30%] h-20 w-20 animate-float text-brand-accent/10 will-change-transform"
        style={{ animationDelay: '1.4s' }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="50,8 90,80 10,80" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        className="absolute bottom-[12%] left-[22%] h-28 w-28 animate-float text-brand-accent/10 will-change-transform"
        style={{ animationDelay: '2.5s' }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon points="30,8 70,8 92,35 80,75 50,92 12,70 8,34" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
};

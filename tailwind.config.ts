import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bgPrimary: '#0a0e1a',
          card: '#111827',
          cardHover: '#1a2236',
          accent: '#c9a227',
          textPrimary: '#f4f0ea',
          textSecondary: '#8a91a4',
          textTertiary: '#c5c9d6',
          border: 'rgba(201,162,39,0.12)',
          borderHover: 'rgba(201,162,39,0.35)',
        },
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        cabinet: ['Outfit', 'sans-serif'],
        martian: ['"Martian Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-14px) translateX(6px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        pulseSoft: 'pulseSoft 6s ease-in-out infinite',
      },
      boxShadow: {
        accent: '0 10px 30px rgba(201,162,39,0.15)',
      },
      backgroundImage: {
        'brand-grid':
          'linear-gradient(rgba(201,162,39,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;

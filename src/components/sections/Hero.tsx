import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GeometricBackground } from '../ui/GeometricBackground';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const Hero = () => {
  return (
    <section className="section-grid relative flex min-h-screen items-center justify-center px-6 pt-28 text-center lg:px-10">
      <GeometricBackground />
      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          variants={fadeUp}
          className="mx-auto mb-6 w-fit border border-brand-border px-3 py-1 font-martian text-[11px] uppercase tracking-[0.2em] text-brand-accent"
        >
          Revenue Systems Architect
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-fraunces text-[clamp(3rem,8vw,5.5rem)] font-semibold italic leading-[0.95] text-brand-textPrimary"
        >
          I Engineer Systems That Generate Measurable Revenue
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-3xl font-cabinet text-lg text-brand-textSecondary md:text-xl"
        >
          GHL Certified System Architect | 7+ Years | 900+ Upwork Hours | Top Rated
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/#contact">Let&apos;s Talk Revenue</Button>
          <Button to="/#services" variant="secondary">
            See My Work
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-accent/70"
        aria-hidden="true"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
};

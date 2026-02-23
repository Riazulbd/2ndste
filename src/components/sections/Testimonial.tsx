import { motion } from 'framer-motion';

export const Testimonial = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
      <div className="mx-auto mb-8 h-px w-full max-w-3xl bg-brand-borderHover" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <svg
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-brand-accent/10"
          viewBox="0 0 120 120"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M44 24c-13 8-22 20-26 37h19c-2 10-9 17-19 20v15c22-5 37-22 37-45V24H44Zm40 0c-13 8-22 20-26 37h19c-2 10-9 17-19 20v15c22-5 37-22 37-45V24H84Z" />
        </svg>
        <blockquote className="relative font-fraunces text-4xl italic leading-tight text-brand-textPrimary md:text-5xl">
          Easy as pie. Revenue flowing. Thanks Riaz!
        </blockquote>
        <p className="mt-8 font-cabinet text-lg text-brand-textSecondary">— Satisfied Client</p>
      </motion.div>
      <div className="mx-auto mt-8 h-px w-full max-w-3xl bg-brand-borderHover" />
    </section>
  );
};

import { motion } from 'framer-motion';
import { SectionEyebrow } from '../ui/SectionEyebrow';

const goodFit = [
  "You're scaling but your systems break under growth",
  "Your funnels look good but don't convert",
  'Emails land in spam and kill your ROI',
  'SMS campaigns are blocked due to compliance issues',
  "You're overwhelmed by tools but not seeing profit",
  'You want systems built right — the first time',
];

const badFit = [
  "You're shopping for the cheapest bid",
  'You prefer DIY tinkering over expert systems',
  'You need 24/7 availability',
];

export const FitCheck = () => {
  return (
    <section id="fit" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionEyebrow>Fit Check</SectionEyebrow>
        <h2 className="font-fraunces text-4xl font-semibold italic text-brand-textPrimary md:text-5xl">
          You&apos;re a Strong Fit If...
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border border-brand-border bg-brand-card/70 p-6"
        >
          <h3 className="font-cabinet text-2xl font-semibold text-brand-textPrimary">Green Flags</h3>
          <ul className="mt-5 space-y-3">
            {goodFit.map((item) => (
              <li
                key={item}
                className="border-l border-brand-accent/60 pl-4 font-cabinet text-brand-textTertiary"
              >
                <span className="mr-2 text-brand-accent">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="border border-brand-border bg-brand-card/35 p-6"
        >
          <h3 className="font-cabinet text-2xl font-semibold text-brand-textSecondary">Not a Fit</h3>
          <ul className="mt-5 space-y-3">
            {badFit.map((item) => (
              <li key={item} className="font-cabinet text-brand-textSecondary">
                <span className="mr-2 text-brand-textSecondary/70">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

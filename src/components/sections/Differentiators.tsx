import { motion } from 'framer-motion';
import { SectionEyebrow } from '../ui/SectionEyebrow';

interface DiffItem {
  others: string;
  mine: string;
}

const rows: DiffItem[] = [
  { others: 'Template installs', mine: 'Revenue-first architecture' },
  { others: 'Disappear after delivery', mine: 'Long-term partnership & optimization' },
  { others: 'Ignore compliance', mine: 'Compliance-driven builds (email + SMS)' },
  { others: "Complexity for complexity's sake", mine: 'Automation designed for profit' },
  { others: 'Cookie-cutter setups', mine: 'Hands-on strategy sessions + custom builds' },
];

export const Differentiators = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionEyebrow>The Difference</SectionEyebrow>
        <h2 className="font-fraunces text-4xl font-semibold italic text-brand-textPrimary md:text-5xl">
          Revenue-First. Not Template-First.
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="mt-12 space-y-3"
      >
        {rows.map((row) => (
          <motion.div
            key={row.others}
            variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
            className="grid gap-4 border border-brand-border bg-brand-card/60 p-5 md:grid-cols-2"
          >
            <p className="font-cabinet text-brand-textSecondary line-through decoration-brand-textSecondary/60">{row.others}</p>
            <p className="font-cabinet font-medium text-brand-textPrimary">
              <span className="mr-2 text-brand-accent">→</span>
              {row.mine}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

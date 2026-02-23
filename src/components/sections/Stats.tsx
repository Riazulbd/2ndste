import { motion } from 'framer-motion';
import { CountUp } from '../ui/CountUp';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '7+', label: 'Years Experience' },
  { value: '900+', label: 'Upwork Hours' },
  { value: '40%+', label: 'Email Open Rates' },
  { value: '6-Fig', label: 'MRR Growth Delivered' },
  { value: 'TOP', label: 'Rated on Upwork' },
  { value: 'GHL', label: 'Certified Admin' },
];

export const Stats = () => {
  return (
    <section id="results" className="bg-gradient-to-r from-brand-card/50 via-brand-bgPrimary to-brand-card/50 py-14">
      <div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-6 lg:px-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="min-w-[170px] snap-start"
          >
            <p className="font-fraunces text-4xl font-semibold italic text-brand-accent md:text-5xl">
              <CountUp target={stat.value} />
            </p>
            <p className="mt-2 font-martian text-[10px] uppercase tracking-[0.2em] text-brand-textSecondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

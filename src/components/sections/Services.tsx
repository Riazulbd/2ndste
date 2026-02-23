import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionEyebrow } from '../ui/SectionEyebrow';

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: 'Profit-Generating Funnels',
    description: 'Conversion-engineered funnels that turn clicks into revenue, not just traffic into vanity metrics.',
  },
  {
    title: 'AI Lead Qualification',
    description: 'Smart AI systems that qualify, score, and book leads automatically — so you only talk to buyers.',
  },
  {
    title: 'Email Automation',
    description: '40%+ open rate frameworks. Deliverability-first architecture that lands in primary, not spam.',
  },
  {
    title: 'A2P 10DLC SMS Systems',
    description: 'Fully compliant Twilio SMS campaigns that actually reach phones and convert.',
  },
  {
    title: 'CRM Architecture',
    description: 'End-to-end GHL CRM builds: pipelines, workflows, automations — designed for scale.',
  },
  {
    title: 'Funnel Repair & Optimization',
    description: 'Diagnosing broken funnels and rebuilding them for measurable ROI improvement.',
  },
];

const icon = (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 16L12 4l8 12H4Z" />
    <path d="M8 16v4h8v-4" />
  </svg>
);

export const Services = () => {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionEyebrow>What I Build</SectionEyebrow>
        <h2 className="max-w-3xl font-fraunces text-4xl font-semibold italic leading-tight text-brand-textPrimary md:text-5xl">
          Revenue Infrastructure, Not Just Setups
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45 }}
          >
            <Card className="h-full">
              <div className="mb-5 text-brand-accent">{icon}</div>
              <h3 className="font-cabinet text-xl font-semibold text-brand-textPrimary">{service.title}</h3>
              <p className="mt-3 font-cabinet text-brand-textSecondary">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

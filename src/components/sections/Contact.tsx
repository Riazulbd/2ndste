import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { SectionEyebrow } from '../ui/SectionEyebrow';
import { Button } from '../ui/Button';
import { contactSchema, type ContactFormData } from '../../lib/schemas';
import { useContactMutation } from '../../hooks/useContactMutation';

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialData: ContactFormData = {
  name: '',
  email: '',
  businessType: undefined,
  bottleneck: '',
};

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState('');
  const mutation = useContactMutation();

  const handleChange = <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => {
    setFormData((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSuccess('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formData);

    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const [path] = issue.path;
        if (typeof path === 'string') {
          fieldErrors[path as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    try {
      await mutation.mutateAsync(parsed.data);
      setSuccess('Submission received. I will get back to you shortly.');
      setFormData(initialData);
      setErrors({});
    } catch (error) {
      setSuccess('');
      setErrors({ bottleneck: 'Something went wrong. Please retry in a moment.' });
      console.error(error);
    }
  };

  const inputClass =
    'w-full border border-brand-border bg-brand-card/80 px-4 py-3 font-cabinet text-brand-textPrimary placeholder:text-brand-textSecondary/70 focus:border-brand-accent focus:outline-none';

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.16),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionEyebrow>Contact</SectionEyebrow>
          <h2 className="font-fraunces text-4xl font-semibold italic leading-tight text-brand-textPrimary md:text-5xl">
            If Your Automation Isn&apos;t Generating Revenue, It&apos;s Costing You.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-cabinet text-lg text-brand-textSecondary">
            Send me your biggest bottleneck and let&apos;s turn it into a scalable revenue system.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 space-y-5 border border-brand-border bg-brand-bgPrimary/70 p-6 sm:p-8"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-martian text-[11px] uppercase tracking-[0.18em] text-brand-textTertiary">
              Name
            </label>
            <input
              id="name"
              value={formData.name}
              onChange={(event) => handleChange('name', event.target.value)}
              className={inputClass}
              placeholder="Your name"
            />
            {errors.name ? <p className="mt-1 text-sm text-red-400">{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-martian text-[11px] uppercase tracking-[0.18em] text-brand-textTertiary">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => handleChange('email', event.target.value)}
              className={inputClass}
              placeholder="you@company.com"
            />
            {errors.email ? <p className="mt-1 text-sm text-red-400">{errors.email}</p> : null}
          </div>

          <div>
            <label
              htmlFor="businessType"
              className="mb-2 block font-martian text-[11px] uppercase tracking-[0.18em] text-brand-textTertiary"
            >
              Business Type
            </label>
            <select
              id="businessType"
              value={formData.businessType ?? ''}
              onChange={(event) => {
                const value = event.target.value;
                handleChange(
                  'businessType',
                  value ? (value as z.infer<typeof contactSchema>['businessType']) : undefined,
                );
              }}
              className={inputClass}
            >
              <option value="">Select business type (optional)</option>
              <option value="agency">Agency</option>
              <option value="coach">Coach/Consultant</option>
              <option value="saas">SaaS</option>
              <option value="ecommerce">E-commerce</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="bottleneck"
              className="mb-2 block font-martian text-[11px] uppercase tracking-[0.18em] text-brand-textTertiary"
            >
              Biggest Bottleneck
            </label>
            <textarea
              id="bottleneck"
              rows={5}
              value={formData.bottleneck}
              onChange={(event) => handleChange('bottleneck', event.target.value)}
              className={inputClass}
              placeholder="Tell me where your revenue system is currently breaking..."
            />
            {errors.bottleneck ? <p className="mt-1 text-sm text-red-400">{errors.bottleneck}</p> : null}
          </div>

          <Button type="submit" fullWidth disabled={mutation.isPending}>
            {mutation.isPending ? 'Submitting...' : "Let's Build Your Revenue System"}
          </Button>

          <p className="min-h-6 text-center text-sm text-emerald-400" aria-live="polite">
            {success}
          </p>

          <p className="pt-2 text-center font-martian text-[10px] uppercase tracking-[0.18em] text-brand-textSecondary">
            Available EST 8:00 AM - 3:00 PM | Ready to start immediately
          </p>
        </motion.form>
      </div>
    </section>
  );
};

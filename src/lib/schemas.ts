import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  businessType: z.enum(['agency', 'coach', 'saas', 'ecommerce', 'other']).optional(),
  bottleneck: z.string().min(10, 'Tell me more about your bottleneck (min 10 chars)'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

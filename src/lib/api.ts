import type { ContactFormData } from './schemas';

export const submitContactForm = async (data: ContactFormData): Promise<{ message: string }> => {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log('Contact submission:', data);
  return { message: 'Thanks. Your request has been received.' };
};

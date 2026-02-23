import { useMutation } from '@tanstack/react-query';
import { submitContactForm } from '../lib/api';
import type { ContactFormData } from '../lib/schemas';

export const useContactMutation = () => {
  return useMutation({
    mutationFn: (data: ContactFormData) => submitContactForm(data),
  });
};

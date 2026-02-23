import type { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

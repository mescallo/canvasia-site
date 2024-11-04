export interface NavItem {
  href: string;
  label: {
    en: string;
    es: string;
  };
}

export interface Service {
  icon: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

export interface Benefit {
  icon: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  percentage: number;
}

export interface Testimonial {
  author: string;
  company: string;
  content: {
    en: string;
    es: string;
  };
  image: string;
}

export type Language = 'en' | 'es';
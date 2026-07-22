export type ProductCategory = 
  | 'all'
  | 'Descoberta e entretenimento'
  | 'Tecnologia para negócios'
  | 'Mobilidade'
  | 'Inteligência empresarial'
  | 'Informação e cidades'
  | 'Experiências e produção'
  | string;

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  url?: string;
  ctaText?: string;
  badge?: string;
  isAvailable: boolean;
  screenshotUrl?: string;
  themeColor: {
    primary: string;
    secondary: string;
    border: string;
    bgGlow: string;
    gradient: string;
  };
  features: string[];
  disclaimer?: string;
}

export interface AreaOfExpertise {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metrics: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  message: string;
}

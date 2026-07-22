import { AreaOfExpertise } from '../types';

export const AREAS_DATA: AreaOfExpertise[] = [
  {
    id: 'saas',
    title: 'Produtos SaaS',
    description: 'Sistemas em nuvem projetados para escalabilidade, alta disponibilidade e modelo recorrente de valor.',
    iconName: 'Cloud',
    metrics: 'Multitenant & Na Nuvem',
    tags: ['Cloud Native', 'Escalável', 'API First']
  },
  {
    id: 'ai',
    title: 'Inteligência Artificial',
    description: 'Modelos de automação, diagnóstico financeiro e inteligência de dados aplicada ao núcleo dos negócios.',
    iconName: 'Sparkles',
    metrics: 'Diagnósticos e Predição',
    tags: ['Machine Learning', 'Análise de Dados', 'LLMs & RAG']
  },
  {
    id: 'web-platforms',
    title: 'Plataformas Web',
    description: 'Ecossistemas web modernos com performance impecável, SEO avançado e arquitetura desacoplada.',
    iconName: 'Globe',
    metrics: 'Alta Performance',
    tags: ['React', 'Next.js', 'UI/UX Premium']
  },
  {
    id: 'management-systems',
    title: 'Sistemas de Gestão',
    description: 'Ferramentas operacionais para controle financeiro, validação em tempo real e relatórios executivos.',
    iconName: 'LayoutGrid',
    metrics: 'Controle em Tempo Real',
    tags: ['Dashboards', 'QR Code', 'Validação']
  },
  {
    id: 'digital-experiences',
    title: 'Experiências Digitais',
    description: 'Interfaces envolventes e projetos de desdobramento cultural e entretenimento para marcas e cidades.',
    iconName: 'Compass',
    metrics: 'Engajamento Local',
    tags: ['Eventos', 'Descoberta', 'Interatividade']
  },
  {
    id: 'business-tech',
    title: 'Tecnologia para Negócios',
    description: 'Soluções customizadas de software para acelerar vendas, automatizar processos e preparar empresas.',
    iconName: 'Building2',
    metrics: 'Retorno sobre Investimento',
    tags: ['Sistemas B2B', 'Split Payment', 'Automação']
  }
];

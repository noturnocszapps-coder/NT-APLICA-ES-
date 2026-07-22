import { Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'roxou',
    name: 'Roxou',
    category: 'Descoberta e entretenimento',
    description: 'Uma plataforma de descoberta local para encontrar eventos, experiências, gastronomia, entretenimento e tudo o que acontece na cidade.',
    url: 'https://roxou.com.br',
    ctaText: 'Conhecer a Roxou',
    badge: 'Disponível',
    isAvailable: true,
    themeColor: {
      primary: '#9333ea',
      secondary: '#ec4899',
      border: 'border-purple-500/30',
      bgGlow: 'from-purple-900/20 to-pink-900/10',
      gradient: 'from-purple-500 to-pink-500'
    },
    features: [
      'Geolocalização para descoberta de eventos próximos',
      'Filtros por categoria, gastronomia e programação cultural',
      'Experiência gamificada para usuários e frequentadores',
      'Integração com mapas e rotas em tempo real'
    ]
  },
  {
    id: 'roxou-partner-pro',
    name: 'Roxou Partner Pro',
    category: 'Tecnologia para negócios',
    description: 'Um ecossistema de ferramentas para estabelecimentos, produtores e profissionais do entretenimento, reunindo gestão de listas VIP, reservas, convites e validação digital.',
    url: 'https://parceiro.roxou.com.br',
    ctaText: 'Conhecer o Partner Pro',
    badge: 'Disponível',
    isAvailable: true,
    themeColor: {
      primary: '#7e22ce',
      secondary: '#06b6d4',
      border: 'border-cyan-500/30',
      bgGlow: 'from-purple-900/20 to-cyan-900/10',
      gradient: 'from-purple-600 to-cyan-500'
    },
    features: [
      'Validação digital e portaria via QR Code em tempo real',
      'Gestão de listas VIP, convites e controle de acesso',
      'Dashboard analítico de frequência e ocupação de caixa',
      'Módulo de reservas e CRM para fidelização de clientes'
    ]
  },
  {
    id: 'roxou-motorista',
    name: 'Roxou Motorista',
    category: 'Mobilidade',
    description: 'Plataforma de gestão financeira e operacional desenvolvida para motoristas de aplicativo acompanharem corridas, faturamento, custos, metas e rentabilidade.',
    badge: 'Em Desenvolvimento',
    isAvailable: false,
    themeColor: {
      primary: '#f59e0b',
      secondary: '#3b82f6',
      border: 'border-amber-500/30',
      bgGlow: 'from-amber-900/20 to-blue-900/10',
      gradient: 'from-amber-500 to-blue-500'
    },
    features: [
      'Cálculo de lucro real por corrida e por hora trabalhada',
      'Controle de combustível, manutenção e depreciação',
      'Metas diárias/semanais com alertas inteligentes',
      'Histórico unificado para múltiplas plataformas de transporte'
    ]
  },
  {
    id: 'split-ready-ai',
    name: 'Split Ready AI',
    category: 'Inteligência empresarial',
    description: 'Ferramenta de diagnóstico e inteligência financeira criada para auxiliar empresas a compreenderem sua capacidade financeira e se prepararem para os impactos do Split Payment e da nova realidade tributária.',
    url: 'https://contabil.ntaplicacoes.com.br',
    ctaText: 'Conhecer o Split Ready AI',
    badge: 'Disponível',
    isAvailable: true,
    disclaimer: 'Nota: O Split Ready AI é uma ferramenta proprietária de diagnóstico empresarial e não representa órgão oficial governamental ou consultoria tributária formal.',
    themeColor: {
      primary: '#3b82f6',
      secondary: '#10b981',
      border: 'border-blue-500/30',
      bgGlow: 'from-blue-900/20 to-emerald-900/10',
      gradient: 'from-blue-500 to-emerald-400'
    },
    features: [
      'Simulação de retenção em tempo real por Split Payment',
      'Análise de impacto no fluxo de caixa e capital de giro',
      'Relatórios executivos de prontidão tributária e operacional',
      'Modelos de recomendação acionados por inteligência artificial'
    ]
  },
  {
    id: 'melhora-prudente',
    name: 'Melhora Prudente',
    category: 'Informação e cidades',
    description: 'Plataforma digital de informação regional criada para aproximar notícias, cidade e população.',
    badge: 'Projeto Regional',
    isAvailable: false,
    themeColor: {
      primary: '#0284c7',
      secondary: '#22d3ee',
      border: 'border-sky-500/30',
      bgGlow: 'from-sky-900/20 to-cyan-900/10',
      gradient: 'from-sky-500 to-cyan-400'
    },
    features: [
      'Centralizador de notícias e comunicados regionais',
      'Canal de participação e utilidade pública para moradores',
      'Monitoramento de serviços urbanos e bairros',
      'Interface otimizada para leitura ágil em celulares'
    ]
  },
  {
    id: 'prudente-em-foco',
    name: 'Prudente em Foco',
    category: 'Experiências e produção',
    description: 'Projeto dedicado à memória dos grandes acontecimentos da região e à criação e produção de novas experiências, eventos, shows e festivais.',
    badge: 'Iniciativa Cultural',
    isAvailable: false,
    themeColor: {
      primary: '#eab308',
      secondary: '#a855f7',
      border: 'border-yellow-500/30',
      bgGlow: 'from-yellow-900/20 to-purple-900/10',
      gradient: 'from-yellow-500 to-purple-500'
    },
    features: [
      'Acervo digital histórico de eventos e marcos da região',
      'Planejamento e produção executiva de grandes shows e festivais',
      'Cobertura fotográfica e multimídia de alto nível',
      'Engajamento comunitário e valorização da cultura local'
    ]
  }
];

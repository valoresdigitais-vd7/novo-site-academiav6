import type { Product, Testimonial, NavLink } from './types';

export const SITE_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'Blog', href: '/blog' }
];

export const LANDING_NAV_LINKS: NavLink[] = [
  { name: 'Início', href: '/' },
  { name: 'A Solução', href: '#problem-solution' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Depoimentos', href: '#testimonials' },
  { name: 'Planos', href: '#investment' },
  { name: 'FAQ', href: '#faq' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Agente Lendário',
    price: 'R$ 888',
    features: [
      'Criação de agentes de IA prontos para uso',
      'Templates de automação comercial',
      'Acesso à comunidade exclusiva',
      'Suporte técnico via Discord'
    ],
  },
  {
    id: 2,
    name: 'Agente Lendário PRO',
    price: 'R$ 1.888',
    features: [
      'Tudo do plano Agente Lendário',
      'Mentoria em grupo quinzenal',
      'Acesso às ferramentas premium de IA',
      'Casos reais de R$ 15k–100k analisados passo a passo'
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Agência IA Master',
    price: 'R$ 4.990',
    features: [
      'Tudo do plano PRO',
      'Consultoria estratégica 1:1 com especialista',
      'Suporte para criação de produto próprio de IA',
      'Implementação de sistemas com ROI comprovado'
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Antes da Academia Lendária eu via IA como algo distante. Hoje fecho projetos de R$ 20k utilizando os agentes que aprendi a criar aqui.',
    author: 'Marcos Faria',
    role: 'Consultor de Automação',
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: 'Comecei sem saber nada de IA e em menos de 2 meses montei um sistema que economizou horas de trabalho para meus clientes.',
    author: 'Lívia Andrade',
    role: 'Freelancer de Marketing',
    avatarUrl: 'https://picsum.photos/id/1006/100/100',
  },
  {
    quote: 'O curso entrega o que promete: aplicação prática e lucro real. A comunidade é o maior diferencial.',
    author: 'Ricardo Oliveira',
    role: 'CEO, Digital Mind',
    avatarUrl: 'https://picsum.photos/id/1007/100/100',
  },
];

export const FAQ_DATA = [
  {
    question: 'Preciso saber programar para participar?',
    answer: 'Não! O método foi criado para empreendedores e profissionais não técnicos. Você aprenderá a montar e vender agentes de IA mesmo que nunca tenha programado.'
  },
  {
    question: 'Como funciona o acesso ao curso?',
    answer: 'Após a inscrição, você recebe acesso imediato à plataforma da Academia Lendária, onde pode assistir às aulas, participar da comunidade e acessar as ferramentas.'
  },
  {
    question: 'Existe garantia?',
    answer: 'Sim. Você tem 30 dias para testar tudo. Se não gostar, devolvemos 100% do seu investimento.'
  },
  {
    question: 'Posso parcelar?',
    answer: 'Sim. Todos os planos podem ser parcelados em até 12x no cartão de crédito.'
  }
];

export const FOOTER_LINKS = {
  company: {
    name: 'Academia Lendária',
    description: 'Formando profissionais que criam e vendem agentes de IA com resultado real.',
    cnpj: 'CNPJ: 45.987.321/0001-22',
    address: 'São Paulo/SP - Brasil',
  },
  support: [
    { name: 'contato@academialendaria.com', href: 'mailto:contato@academialendaria.com' },
    { name: 'Suporte via Discord', href: 'https://discord.gg/academialendaria' }
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos-de-servico' },
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' }
  ],
  enterprise: [
    { name: 'Sobre a Academia', href: '/sobre' },
    { name: 'Contato', href: '/contato' }
  ],
};

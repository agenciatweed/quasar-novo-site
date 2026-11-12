// Conteúdo factual do site QUASAR. Cada marco tem fonte verificável; não inventar dados.

export const nav = [
  { label: 'Pilares', href: '#pilares' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Setores', href: '#setores' },
  { label: 'Insights', href: '#insights' },
  { label: 'Liderança', href: '#lideranca' },
  { label: 'Contato', href: '#contato' },
];

export type Pillar = {
  ref: string;
  num: string;
  slug: string;
  title: [string, string];
  name: string;
  summary: string;
  tone: string;
};

export const pillars: Pillar[] = [
  {
    ref: 'Q-01', num: '01', slug: 'cyber-ai-security', title: ['Cyber & AI', 'Security'],
    name: 'Cyber Security & AI Security',
    summary: 'Proteção estratégica para ambientes digitais cada vez mais complexos, incluindo o ciclo de vida dos modelos de IA da própria organização.',
    tone: 'var(--tone-1)',
  },
  {
    ref: 'Q-02', num: '02', slug: 'inteligencia-artificial', title: ['Inteligência', 'Artificial'],
    name: 'Inteligência Artificial',
    summary: 'IA aplicada à estratégia, à segurança, à eficiência e à transformação dos negócios, com governança desde o primeiro dia.',
    tone: 'var(--tone-2)',
  },
  {
    ref: 'Q-03', num: '03', slug: 'computacao-quantica', title: ['Computação', 'Quântica'],
    name: 'Computação Quântica',
    summary: 'Antecipação dos impactos da computação quântica sobre segurança, criptografia e modelos de negócio.',
    tone: 'var(--tone-3)',
  },
  {
    ref: 'Q-04', num: '04', slug: 'riscos-tecnologicos', title: ['Riscos', 'Tecnológicos'],
    name: 'Gestão de Riscos Tecnológicos',
    summary: 'Identificação, avaliação e tratamento dos riscos que podem comprometer a continuidade e a estratégia da empresa.',
    tone: 'var(--tone-4)',
  },
  {
    ref: 'Q-05', num: '05', slug: 'governanca-iso-27001', title: ['Governança', '& ISO 27001'],
    name: 'Governança, Compliance e ISO 27001',
    summary: 'Estruturas para elevar a maturidade, a governança e a resiliência organizacional, com conformidade auditável.',
    tone: 'var(--tone-5)',
  },
  {
    ref: 'Q-06', num: '06', slug: 'seguranca-pos-quantica', title: ['Segurança', 'Pós-Quântica'],
    name: 'Segurança Pós-Quântica',
    summary: 'Preparação para uma nova geração de desafios criptográficos, antes que os algoritmos atuais deixem de proteger.',
    tone: 'var(--tone-6)',
  },
];

export type Milestone = {
  ref: string;
  year: number; // posição no eixo (anos decimais)
  label: string;
  detail: string;
  status: 'Em vigor' | 'Em tramitação' | 'Previsto';
  source: string;
};

// Marcos do cenário (hero). Fontes: BCB/CMN e NIST IR 8547.
export const milestones: Milestone[] = [
  {
    ref: 'Q-01', year: 2026.17, label: '2026 · Res. CMN 5.274',
    detail: 'Instituições financeiras: teste de intrusão ao menos anual e ambientes Pix/STR isolados. Adequação até 1º de março de 2026.',
    status: 'Em vigor', source: 'Banco Central do Brasil / CMN',
  },
  {
    ref: 'Q-02', year: 2030, label: '2030 · NIST: RSA depreciado',
    detail: 'Algoritmos de chave pública vulneráveis ao computador quântico (RSA, ECC) passam a ser depreciados no roteiro de transição do NIST.',
    status: 'Previsto', source: 'NIST IR 8547',
  },
  {
    ref: 'Q-03', year: 2035, label: '2035 · criptografia clássica proibida',
    detail: 'Os mesmos algoritmos deixam de ser permitidos. Dados capturados hoje podem ser decifrados amanhã ("harvest now, decrypt later").',
    status: 'Previsto', source: 'NIST IR 8547',
  },
];

// Entregas por pilar (oferta herdada do site atual, redistribuída).
export const pillarOffers: Record<string, string[]> = {
  '01': ['Arquitetura de defesa com Zero Trust e IA para detecção de anomalias', 'Segurança do ciclo de vida de modelos de IA', 'Resiliência cibernética e resposta a incidentes'],
  '02': ['Copilotos de IA para processos corporativos', 'Busca cognitiva (RAG) sobre a base de conhecimento', 'AI Office: governança, ética e estratégia de adoção'],
  '03': ['Quantum Readiness Program para lideranças', 'Protótipos híbridos (quântico + IA)', 'Roadmap de inovação quântica e P&D'],
  '04': ['Mapeamento e modelagem de ameaças', 'Avaliação de impacto no negócio', 'Priorização de investimentos por risco'],
  '05': ['Frameworks de governança e compliance', 'Preparação para ISO/IEC 27001:2022', 'Alinhamento a LGPD e normas setoriais'],
  '06': ['Inventário criptográfico', 'Plano de migração para algoritmos pós-quânticos', 'Security by design em novos produtos'],
};

export type AgendaRow = { ref: string; when: string; item: string; detail: string; status: 'Em vigor' | 'Em tramitação' | 'Previsto'; source: string };

// Agenda do Conselho: ordenada por data. Fontes públicas; conferir antes de publicar.
export const agenda: AgendaRow[] = [
  { ref: 'Q-04', when: 'out 2025', item: 'ISO/IEC 27001:2022', detail: 'Fim da transição: certificados na versão 2013 deixaram de valer.', status: 'Em vigor', source: 'Organismos de certificação (DNV)' },
  { ref: 'Q-01', when: 'mar 2026', item: 'Resolução CMN 5.274', detail: 'Teste de intrusão ao menos anual e isolamento dos ambientes Pix e STR para instituições financeiras.', status: 'Em vigor', source: 'Banco Central do Brasil / CMN' },
  { ref: 'Q-05', when: '2026', item: 'PL 4.752/2025 — Marco Legal da Cibersegurança', detail: 'Em análise no Senado Federal.', status: 'Em tramitação', source: 'Senado Federal' },
  { ref: 'Q-06', when: '2026', item: 'PL 2.338 — marco legal da IA', detail: 'Aprovado no Senado em 2024; em análise na Câmara dos Deputados.', status: 'Em tramitação', source: 'Câmara dos Deputados' },
  { ref: 'Q-07', when: '2027', item: 'HQC, padrão reserva do NIST', detail: 'Algoritmo alternativo de encapsulamento de chaves; padrão final previsto para 2027.', status: 'Previsto', source: 'NIST' },
  { ref: 'Q-02', when: '2030', item: 'RSA e ECC depreciados', detail: 'Algoritmos de chave pública vulneráveis ao computador quântico deixam de ser recomendados.', status: 'Previsto', source: 'NIST IR 8547' },
  { ref: 'Q-03', when: '2035', item: 'Criptografia clássica proibida', detail: 'Os mesmos algoritmos deixam de ser permitidos. O que for capturado hoje pode ser decifrado depois.', status: 'Previsto', source: 'NIST IR 8547' },
];

export const context = [
  { figure: 'R$ 7,19', unit: 'milhões', text: 'é o custo médio de uma violação de dados no Brasil. O comprometimento de terceiros e da cadeia de suprimentos é o vetor mais caro.', source: 'IBM, Cost of a Data Breach 2025' },
  { figure: '87%', text: 'dos líderes ouvidos pelo Fórum Econômico Mundial relataram aumento de vulnerabilidades ligadas à IA no último ano.', source: 'WEF, Global Cybersecurity Outlook 2026' },
  { figure: '2030', text: 'é o ano em que o NIST passa a depreciar a criptografia de chave pública usada hoje. Dados capturados agora podem ser decifrados depois.', source: 'NIST IR 8547' },
];

export const approach = [
  { step: 'Diagnóstico', text: 'Leitura da operação, dos acessos, das integrações e dos fornecedores para entender o que está exposto e o que importa para o negócio.' },
  { step: 'Roadmap', text: 'Plano priorizado por risco e impacto, com casos de uso, investimentos e retorno definidos para o Conselho decidir.' },
  { step: 'Prova', text: 'Prova de conceito ou MVP para validar a solução com usuários e stakeholders antes do investimento completo.' },
  { step: 'Escala e governança', text: 'Implementação sob medida, integrada aos processos, com governança, métricas e conformidade contínuas.' },
];

export const sectors = [
  { name: 'Instituições financeiras', text: 'Regulação cibernética do Banco Central, Pix, fraude e a transição pós-quântica em sistemas que não podem parar.' },
  { name: 'Infraestrutura crítica e ambientes regulados', text: 'Continuidade operacional, frameworks de segurança cognitiva e conformidade auditável.' },
  { name: 'Médias e grandes empresas', text: 'Ativos digitais críticos, adoção de IA com governança e maturidade de segurança proporcional ao risco.' },
];

export const boardQuestions = [
  { theme: 'Inteligência Artificial', q: 'Sabemos quais modelos de IA tomam decisões na nossa empresa, com quais dados e sob qual governança?' },
  { theme: 'Pós-quântico', q: 'Que informações nossas precisam continuar secretas depois de 2030, e elas já estão protegidas contra quem as captura hoje?' },
  { theme: 'Terceiros', q: 'Se um fornecedor crítico for comprometido amanhã, quanto tempo a operação continua de pé?' },
  { theme: 'Regulação', q: 'Estamos acompanhando a agenda regulatória ou reagindo a ela depois que vira obrigação?' },
  { theme: 'Investimento', q: 'Nosso orçamento de segurança segue o risco do negócio ou a lista de ferramentas?' },
];

// v2 (benchmarks): destaques do hero e perspectivas
export const featured = [
  { label: 'Agenda do Conselho', title: 'Agenda do Conselho: os marcos regulatórios de 2026', href: '#agenda' },
  { label: 'Pós-quântico', title: 'Pós-quântico: o prazo de 2030 já começou', href: '#perspectivas' },
  { label: 'AI Summit Brasil', title: 'AI Summit Brasil: a QUASAR é patrocinadora oficial 2026', href: '#ecossistema' },
];

export const perspectives = [
  {
    category: 'Pós-quântico', image: '/images/insight-02.webp',
    title: 'O prazo de 2030 já começou',
    text: 'O NIST prevê depreciar RSA e ECC após 2030. Dados capturados hoje podem ser decifrados amanhã: o inventário criptográfico é decisão de Conselho, não de TI.',
    href: '#agenda',
  },
  {
    category: 'Inteligência Artificial', image: '/images/insight-01.webp',
    title: 'Quem governa os modelos que decidem por você?',
    text: '87% dos líderes ouvidos pelo Fórum Econômico Mundial viram crescer as vulnerabilidades ligadas à IA. Governança de IA virou pauta de risco corporativo.',
    href: '#pilares',
  },
  {
    category: 'Governança', image: '/images/insight-03.webp',
    title: 'ISO/IEC 27001:2022 e o papel do Conselho',
    text: 'A transição terminou em outubro de 2025. Certificação é o começo: maturidade, métricas e resiliência são o que sustentam a confiança.',
    href: '#agenda',
  },
];

export const pillarImages: Record<string, string> = {
  '01': '/images/pilar-01.webp',
  '02': '/images/pilar-02.webp',
  '03': '/images/pilar-03.webp',
  '04': '/images/pilar-04.webp',
  '05': '/images/pilar-05.webp',
  '06': '/images/pilar-06.webp',
};

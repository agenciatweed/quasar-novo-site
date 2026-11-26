// Raio-X Quasar — 21 perguntas, 7 dimensões (3 por dimensão), nota por dimensão.
// As 7 dimensões cobrem as 6 camadas do modelo + a prontidão pós-quântica (guia, plano de 90 dias).

export const scale = [
  { v: 0, label: 'Não', hint: 'Não existe hoje.' },
  { v: 1, label: 'Em parte', hint: 'Existe de forma parcial ou informal.' },
  { v: 2, label: 'Sim, sem teste', hint: 'Existe e está definido, mas nunca foi testado ou auditado.' },
  { v: 3, label: 'Sim, testado', hint: 'Existe, está documentado e foi testado nos últimos 12 meses.' },
] as const;
export const unknown = { v: -1, label: 'Não sei' } as const;

export interface Dimension {
  key: string;
  name: string;
  icon: string;
  intro: string;
  questions: { q: string; help: string }[];
  advice: string;
  href: string;
  cta: string;
}

export const dimensions: Dimension[] = [
  {
    key: 'governanca', name: 'Governança e conselho', icon: 'landmark',
    intro: 'Como o risco cibernético chega a quem decide.',
    questions: [
      { q: 'O risco cibernético está na matriz de riscos corporativos, com dono, nota e prazo definidos?', help: 'Não basta estar no plano de TI: precisa estar na matriz que o conselho acompanha.' },
      { q: 'O conselho ou a diretoria recebe, ao menos a cada trimestre, um relatório de segurança em linguagem de negócio?', help: 'Risco, impacto, prioridade e prazo — não volume de alertas.' },
      { q: 'A empresa sabe quanto custa um dia de operação parada?', help: 'Receita perdida, multas, contratos e reputação. Sem esse número, não há como decidir quanto investir.' },
    ],
    advice: 'Leve o risco cibernético para a matriz corporativa, com dono e prazo, e defina o custo de um dia parado.',
    href: '/consultoria/analise-riscos/', cta: 'Análise e Gestão de Riscos',
  },
  {
    key: 'pessoas', name: 'Pessoas e fraudes com IA', icon: 'users',
    intro: 'Deepfakes, voz clonada e e-mails escritos por IA.',
    questions: [
      { q: 'Existe protocolo de dupla confirmação, por outro canal, para pedidos urgentes de pagamento ou de dados — inclusive por vídeo ou voz?', help: 'Voz e vídeo de executivos já podem ser falsificados.' },
      { q: 'Os colaboradores foram treinados sobre golpes com IA (deepfake, voz clonada, phishing) nos últimos 12 meses?', help: 'Inclua o financeiro, o atendimento e os assistentes da diretoria.' },
      { q: 'Há um canal simples e conhecido por todos para relatar uma tentativa de golpe ou um incidente suspeito?', help: 'Quem desconfia precisa saber, em segundos, a quem avisar.' },
    ],
    advice: 'Implante o protocolo de dupla confirmação por outro canal e treine as áreas que movimentam dinheiro e dados.',
    href: '/insights/deepfake-do-ceo/', cta: 'Protocolo contra deepfake',
  },
  {
    key: 'identidades', name: 'Identidades e acessos', icon: 'key-round',
    intro: 'Quem entra, com que privilégio e por quanto tempo.',
    questions: [
      { q: 'A autenticação multifator (MFA) está ativa para e-mail, acesso remoto e sistemas críticos?', help: 'Senha sozinha não protege contas executivas nem administrativas.' },
      { q: 'Os acessos privilegiados (administradores) são controlados, registrados e revisados periodicamente?', help: 'Contas de administrador são o alvo preferido em incidentes graves.' },
      { q: 'Acessos de ex-colaboradores e fornecedores são removidos assim que o vínculo termina?', help: 'Contas esquecidas são portas abertas.' },
    ],
    advice: 'Ative MFA em tudo o que é crítico e coloque os acessos privilegiados sob controle e revisão contínua.',
    href: '/servicos-gerenciados/identidade-nuvem/', cta: 'Identidade & Nuvem Corporativa',
  },
  {
    key: 'dados', name: 'Dados e uso de IA', icon: 'database',
    intro: 'Onde estão os dados sensíveis e o que vai para a IA.',
    questions: [
      { q: 'A empresa sabe onde estão seus dados mais sensíveis e quem tem acesso a eles?', help: 'Dados de clientes, contratos, propriedade intelectual e dados pessoais (LGPD).' },
      { q: 'Há política formal de uso de ferramentas de IA, dizendo o que pode e o que não pode ser colado nelas?', help: 'Proibir não funciona; regra clara e ferramenta segura, sim.' },
      { q: 'Os modelos, assistentes e integrações de IA da própria empresa passam por avaliação de segurança antes de entrar em produção?', help: 'Injeção de instruções e vazamento de dados por IA já são riscos reais.' },
    ],
    advice: 'Mapeie os dados sensíveis, publique uma política de uso seguro de IA e avalie os modelos da empresa antes da produção.',
    href: '/consultoria/ia-nuvem/', cta: 'Governança e Segurança para IA',
  },
  {
    key: 'exposicao', name: 'Exposição e vulnerabilidades', icon: 'scan-eye',
    intro: 'O que um atacante enxerga de fora.',
    questions: [
      { q: 'A empresa conhece tudo o que tem exposto na internet (sistemas, domínios, serviços em nuvem)?', help: 'Não dá para proteger o que não se sabe que existe.' },
      { q: 'Um teste de intrusão (pentest) independente foi realizado nos últimos 12 meses?', help: 'No setor financeiro, as normas do Banco Central exigem testes periódicos.' },
      { q: 'As correções de vulnerabilidades críticas seguem um prazo definido e acompanhado?', help: 'Falhas conhecidas e não corrigidas estão entre as portas de entrada mais comuns.' },
    ],
    advice: 'Descubra continuamente a superfície exposta, faça um pentest independente e defina prazos para corrigir o que é crítico.',
    href: '/servicos-gerenciados/ctem-pentest/', cta: 'Gestão Contínua de Exposição',
  },
  {
    key: 'resposta', name: 'Resposta e recuperação', icon: 'life-buoy',
    intro: 'O que acontece nas primeiras 24 horas — e depois.',
    questions: [
      { q: 'Existe monitoramento de segurança 24x7, interno ou contratado?', help: 'Ataques acontecem fora do horário comercial.' },
      { q: 'O plano de resposta define quem fala com clientes, reguladores e imprensa nas primeiras 24 horas — e foi testado no último ano?', help: 'Plano que nunca foi testado é só documento.' },
      { q: 'Os backups críticos estão isolados (imutáveis ou offline) e a restauração foi testada nos últimos 6 meses?', help: 'Backup não é plano de recuperação: só vale o que foi restaurado com sucesso.' },
    ],
    advice: 'Garanta monitoramento 24x7, teste o plano de resposta com a diretoria e isole e teste os backups críticos.',
    href: '/servicos-gerenciados/soc-mdr/', cta: 'SOC & Resposta a Incidentes',
  },
  {
    key: 'quantico', name: 'Prontidão pós-quântica', icon: 'atom',
    intro: 'Os dados de hoje diante dos computadores de amanhã.',
    questions: [
      { q: 'A empresa tem um inventário de onde e como usa criptografia (sistemas, certificados, chaves, fornecedores)?', help: 'É o primeiro passo da migração — e quase ninguém deu.' },
      { q: 'Os dados que precisam continuar secretos por 10 anos ou mais estão identificados?', help: 'Contratos, patentes e dados de clientes copiados hoje podem ser abertos amanhã.' },
      { q: 'Existe um plano de migração para os padrões pós-quânticos (como os FIPS 203, 204 e 205 do NIST)?', help: 'O roteiro do NIST prevê depreciar RSA e curvas elípticas após 2030.' },
    ],
    advice: 'Comece pelo inventário de criptografia e pela lista de dados de longa vida; depois, desenhe o plano de migração.',
    href: '/consultoria/pos-quantico/', cta: 'Prontidão Pós-Quântica',
  },
];

export const tiers = [
  { min: 85, name: 'Resiliente', text: 'A base está sólida. O foco agora é manter, medir e evoluir — inclusive diante da IA e do horizonte quântico.' },
  { min: 65, name: 'Gerenciado', text: 'Há controles importantes em funcionamento, mas ainda existem lacunas que um atacante pode explorar.' },
  { min: 40, name: 'Em estruturação', text: 'Parte da proteção existe, mas sem teste nem evidência. As prioridades abaixo reduzem o risco mais rápido.' },
  { min: 0, name: 'Exposição crítica', text: 'Lacunas relevantes em várias dimensões. Vale tratar o tema na próxima reunião de diretoria.' },
];

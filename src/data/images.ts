// Registro de imagens do site v3.
// Artes finais (Midjourney) em public/images/v3/<id>.webp (desktop) e <id>-m.webp (mobile).
// Para incluir uma nova: salvar os arquivos e acrescentar o id ao conjunto `ready`
// (e remover o alias, se houver). Prompts e medidas em docs/v3-prompts-midjourney.md.

const PLACEHOLDER = '/images/placeholder.jpg';

/** ids com arte final entregue */
const ready = new Set<string>([
  'home-hero', 'home-quem-somos', 'home-solucoes', 'home-ideia', 'home-autoridade', 'home-newsletter', 'home-contato',
  'sol-ia-defesa', 'sol-modelos-ia', 'sol-pos-quantico', 'sol-arquiteturas', 'sol-governanca', 'sol-diagnostico',
  'sobre-hero', 'sobre-presenca',
  'cat-consultoria', 'cat-servicos-gerenciados',
  'metodologia-hero', 'insights-hero', 'raiox-hero',
  'cover-p1', 'cover-p2', 'cover-p3', 'cover-p4', 'cover-p5',
]);

/** Enquanto a arte própria não chega, o slot usa a arte de outro (ex.: serviço → categoria). */
const alias: Record<string, string> = {
  'svc-analise-riscos': 'cat-consultoria',
  'svc-iso-27001': 'cat-consultoria',
  'svc-lgpd-privacidade': 'cat-consultoria',
  'svc-ia-nuvem': 'cat-consultoria',
  'svc-pos-quantico': 'cat-consultoria',
  'svc-continuidade-dr': 'cat-consultoria',
  'svc-automacao': 'cat-consultoria',
  'svc-soc-mdr': 'cat-servicos-gerenciados',
  'svc-ctem-pentest': 'cat-servicos-gerenciados',
  'svc-protecao-dados': 'cat-servicos-gerenciados',
  'svc-identidade-nuvem': 'cat-servicos-gerenciados',
};

/** true quando o slot já tem arte final (própria ou emprestada). */
export const isReady = (id: string) => ready.has(id) || (alias[id] !== undefined && ready.has(alias[id]));

type Kind = 'art' | 'card' | 'cover' | 'photo';
interface Slot { kind: Kind; alt: string; mobile?: boolean }

export const slots: Record<string, Slot> = {
  // Home — artes 1920×1080 (guia, seção 3) + mobile 1080×1920
  'home-hero': { kind: 'art', mobile: true, alt: 'Executivos em uma sala de conselho ao anoitecer, com a cidade ao fundo' },
  'home-quem-somos': { kind: 'art', mobile: true, alt: 'Ciência aplicada à segurança: laboratório e dados em luz ciano' },
  'home-solucoes': { kind: 'art', mobile: true, alt: 'Núcleo de dados iluminado em ciano e violeta' },
  'home-ideia': { kind: 'art', mobile: true, alt: 'Horizonte noturno visto do alto, com trilhas de luz antecipando o caminho' },
  'home-autoridade': { kind: 'art', mobile: true, alt: 'Palco de conferência executiva internacional' },
  'home-newsletter': { kind: 'art', mobile: true, alt: 'Mesa de conselho com relatório e tablet sob luz baixa' },
  'home-contato': { kind: 'art', mobile: true, alt: 'Sala de reunião executiva preparada para o diagnóstico' },
  // Home — cards do carrossel "Nossas soluções" (1200×1500)
  'sol-ia-defesa': { kind: 'card', alt: 'Centro de operações de segurança com analistas e telas em ciano' },
  'sol-modelos-ia': { kind: 'card', alt: 'Rede neural abstrata protegida por camadas de luz' },
  'sol-pos-quantico': { kind: 'card', alt: 'Processador quântico com feixes de luz ciano e violeta' },
  'sol-arquiteturas': { kind: 'card', alt: 'Arquitetura em camadas translúcidas sobrepostas' },
  'sol-governanca': { kind: 'card', alt: 'Conselheiros analisando indicadores de risco' },
  'sol-diagnostico': { kind: 'card', alt: 'Diretoria reunida para o Diagnóstico Executivo' },
  // Sobre
  'sobre-hero': { kind: 'art', mobile: true, alt: 'Sede corporativa envidraçada ao anoitecer' },
  'sobre-presenca': { kind: 'art', mobile: true, alt: 'Rio de Janeiro e Vancouver conectados por trilhas de luz' },
  'andre-silva': { kind: 'photo', alt: 'André Machado da Silva' },
  // Páginas de categoria
  'cat-consultoria': { kind: 'art', mobile: true, alt: 'Consultores e diretoria em sessão de estratégia' },
  'cat-servicos-gerenciados': { kind: 'art', mobile: true, alt: 'Centro de operações de segurança em funcionamento 24x7' },
  // Serviços (heróis)
  'svc-analise-riscos': { kind: 'art', mobile: true, alt: 'Mapa de calor de riscos projetado sobre a mesa do conselho' },
  'svc-iso-27001': { kind: 'art', mobile: true, alt: 'Documentação de auditoria e controles organizados' },
  'svc-lgpd-privacidade': { kind: 'art', mobile: true, alt: 'Fluxo de dados pessoais protegido por camadas' },
  'svc-ia-nuvem': { kind: 'art', mobile: true, alt: 'Assistente de IA corporativo protegido por barreiras de luz' },
  'svc-pos-quantico': { kind: 'art', mobile: true, alt: 'Criptografia de nova geração envolvendo um núcleo de dados' },
  'svc-continuidade-dr': { kind: 'art', mobile: true, alt: 'Data center com cópias de segurança isoladas' },
  'svc-automacao': { kind: 'art', mobile: true, alt: 'Fluxos automatizados conectando sistemas' },
  'svc-soc-mdr': { kind: 'art', mobile: true, alt: 'Analistas em centro de operações de segurança à noite' },
  'svc-ctem-pentest': { kind: 'art', mobile: true, alt: 'Superfície de ataque mapeada em malha luminosa' },
  'svc-protecao-dados': { kind: 'art', mobile: true, alt: 'Cofre de dados com criptografia em camadas' },
  'svc-identidade-nuvem': { kind: 'art', mobile: true, alt: 'Identidade digital verificada em ambiente de nuvem' },
  // Outras páginas
  'metodologia-hero': { kind: 'art', mobile: true, alt: 'Seis camadas de proteção sobrepostas em perspectiva' },
  'insights-hero': { kind: 'art', mobile: true, alt: 'Biblioteca executiva com luz ciano' },
  'raiox-hero': { kind: 'art', mobile: true, alt: 'Varredura em luz ciano revelando a estrutura de uma empresa' },
  // Capas das linhas editoriais (1600×900)
  'cover-p1': { kind: 'cover', alt: 'Rosto digital fragmentado em luz ciano, representando deepfakes e IA' },
  'cover-p2': { kind: 'cover', alt: 'Chip quântico com feixes de luz violeta' },
  'cover-p3': { kind: 'cover', alt: 'Mesa de conselho vista do alto' },
  'cover-p4': { kind: 'cover', alt: 'Camadas de proteção translúcidas em perspectiva' },
  'cover-p5': { kind: 'cover', alt: 'Laboratório de pesquisa com quadro de equações' },
};

export function img(id: string) {
  const slot = slots[id];
  if (!slot) throw new Error(`Slot de imagem inexistente: ${id}`);
  const file = ready.has(id) ? id : alias[id] && ready.has(alias[id]) ? alias[id] : null;
  return {
    ...slot,
    id,
    ready: file !== null,
    desktop: file ? `/images/v3/${file}.webp` : PLACEHOLDER,
    mobileSrc: slot.mobile ? (file ? `/images/v3/${file}-m.webp` : PLACEHOLDER) : undefined,
  };
}

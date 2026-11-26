// Artigos das 5 linhas editoriais (Banco de Pautas, séries-âncora e plano de 90 dias do guia v3).
import { pillarBy } from './site';
import { slots } from './images';

interface Source { label: string; url?: string }
export interface ArticleMeta {
  slug: string;
  title: string;
  summary: string;
  pillar: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  readTime: number;
  order: number;
  featured?: boolean;
  /** id de uma imagem do registro (src/data/images.ts) usada como capa */
  cover?: string;
  /** série-âncora do guia e número do episódio (0 = introdução) */
  series?: keyof typeof seriesInfo;
  episode?: number;
  boardQuestion?: string;
  sources?: Source[];
  review?: string;
}

export const seriesInfo = {
  'fora-para-dentro': {
    name: 'De fora para dentro — uma camada por vez',
    short: 'De fora para dentro',
    desc: 'Seis episódios que percorrem o mapa de 6 camadas na prática: o que cada camada protege, o risco que reduz e as perguntas que a diretoria deve fazer.',
  },
} as const;

const PILLAR_ORDER = ['p1', 'p2', 'p3', 'p4', 'p5'];
const mods = import.meta.glob<any>('../content/insights/*.md', { eager: true });

export const articles = Object.entries(mods)
  .map(([path, m]) => ({
    ...(m.frontmatter as Omit<ArticleMeta, 'slug'>),
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    Content: m.Content,
    headings: (m.getHeadings?.() ?? []) as { depth: number; slug: string; text: string }[],
  }))
  .sort((a, b) => PILLAR_ORDER.indexOf(a.pillar) - PILLAR_ORDER.indexOf(b.pillar) || a.order - b.order);

export type Article = (typeof articles)[number];
export const articleBy = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesIn = (slugs: string[]) => slugs.map(articleBy).filter(Boolean) as Article[];
export const seriesOf = (key: keyof typeof seriesInfo) =>
  articles.filter((a) => a.series === key).sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));
export const coverOf = (a: Pick<ArticleMeta, 'pillar' | 'cover'>) =>
  a.cover && slots[a.cover] ? a.cover : `cover-${a.pillar}`;
export const pillarName = (a: Pick<ArticleMeta, 'pillar'>) => pillarBy(a.pillar).name;

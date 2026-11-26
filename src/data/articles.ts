// Artigos do Banco de Pautas (5 linhas editoriais) + briefings do HTML de referência.
import { pillarBy } from './site';

interface Source { label: string; url?: string }
export interface ArticleMeta {
  slug: string;
  title: string;
  summary: string;
  pillar: 'p1' | 'p2' | 'p3' | 'p4' | 'p5';
  readTime: number;
  order: number;
  featured?: boolean;
  boardQuestion?: string;
  sources?: Source[];
  review?: string;
}

const mods = import.meta.glob<any>('../content/insights/*.md', { eager: true });

export const articles = Object.entries(mods)
  .map(([path, m]) => ({
    ...(m.frontmatter as Omit<ArticleMeta, 'slug'>),
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    Content: m.Content,
    headings: (m.getHeadings?.() ?? []) as { depth: number; slug: string; text: string }[],
  }))
  .sort((a, b) => a.order - b.order);

export type Article = (typeof articles)[number];
export const articleBy = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesIn = (slugs: string[]) => slugs.map(articleBy).filter(Boolean) as Article[];
export const coverOf = (a: Pick<ArticleMeta, 'pillar'>) => `cover-${a.pillar}`;
export const pillarName = (a: Pick<ArticleMeta, 'pillar'>) => pillarBy(a.pillar).name;

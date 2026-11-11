---
name: QUASAR
description: Transformamos Ciência em Estratégia — consultoria estratégica em risco, segurança, IA e computação quântica
colors:
  blue: "#108ccf"
  band-core: "#108ccf"
  band-1: "#38a0d7"
  band-2: "#7cc0e5"
  band-3: "#b9d9ea"
  band-4: "#d8e9f1"
  violet: "#6c42f5"
  tone-1: "#1c8fd3"
  tone-2: "#2a86d6"
  tone-3: "#3d7bdc"
  tone-4: "#5868e2"
  tone-5: "#6655ea"
  tone-6: "#6c42f5"
  ground: "#f4f5f2"
  ground-raised: "#f9faf8"
  ink: "#0a1a36"
  ink-soft: "#3b4a5e"
  ink-muted: "#5d6a7b"
  rule: "#d7dce1"
  rule-strong: "#b9c0c8"
  grid: "#e3e6e8"
typography:
  display:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "4.43cqw"
    fontWeight: 500
    lineHeight: 0.985
    letterSpacing: "-0.038em"
    fontFeature: "'tnum' 1, 'lnum' 1"
  display-close:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.4vw, 4.8rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.3vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.032em"
  title:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2vw, 2.1rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  statement:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.75vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  intro:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.15vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Hanken Grotesk Variable', 'Hanken Grotesk', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  hairline: "2px"
  dot: "50%"
spacing:
  gutter: "8.3vw"
  gutter-mobile: "1.25rem"
  section: "clamp(5rem, 9vw, 9.5rem)"
  section-close: "clamp(6rem, 11vw, 11rem)"
  block: "clamp(3rem, 5vw, 5rem)"
  row: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.body}"
    rounded: "{rounded.hairline}"
    padding: "1rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.ground}"
  milestone-chip:
    backgroundColor: "{colors.ground-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hairline}"
    padding: "0.3rem 0.45rem"
  status-dot:
    size: "0.6rem"
    rounded: "{rounded.dot}"
  section-quiet:
    backgroundColor: "{colors.ground-raised}"
    padding: "{spacing.section} {spacing.gutter}"
---

# Design System: QUASAR

## Overview

**Creative North Star: "O Horizonte de Cenários"**

A QUASAR não mostra ameaças. Mostra o futuro mapeado. O mundo visual nasce dos **gráficos de cenário dos relatórios de bancos centrais** (os fan charts): uma linha do passado chega a um ponto chamado **"hoje"** (no build, novembro de 2026, marcado por uma linha violeta) e, a partir dele, o futuro se abre em faixas de incerteza azul translúcidas até 2035, com marcos datados e fontes citadas. É a antecipação desenhada, na linguagem que Conselhos, CFOs e instituições financeiras leem todos os dias, mas com luz: as faixas são luminosas, em camadas, e se desenham ao carregar.

O resultado construído é claro, preciso e calmo: fundo mineral, tinta navy, uma única grotesca (Hanken Grotesk) com algarismos tabulares, réguas de 1px e muito espaço. A página alterna passagens densas (índice de pilares, Agenda do Conselho em tabela, linha de horizonte) e quietas (uma afirmação grande por linha, perguntas ao Conselho). A escala institucional vem do sistema de referência: marcos Q-01…Q-07, pilares 01–06, etapas 01–04, notas "Fonte: …" junto ao dado. O dado é o ornamento.

Rejeições confirmadas: escuro e futurista; frio demais / cara de banco; tudo o que o briefing veta (ver Do's and Don'ts).

**Key Characteristics:**
- Fundo claro mineral, tinta navy, luz azul nas faixas de cenário; violeta só para "hoje" e estados em movimento.
- Uma única origem compositiva: o fan chart se abre a partir de "hoje", e as linhas de horizonte da página repetem a virada tinta→azul nesse ponto.
- Marcos reais, datados, com fonte e endereço próprio (#marco-q-0X).
- Sistema de referência numerado (Q-0X, 01–06, 01–04); o índice é o mapa.
- Cada pilar com o seu tom na rampa azul→violeta (tone-1…tone-6).
- Plano: réguas finas e listas regradas, não cartões.

## Colors

Estratégia **Restrained com luz**: neutros claros e tinta navy dominam; o azul QUASAR aparece como luz em camadas e o violeta é raro e funcional.

### Primary
- **Azul QUASAR** (blue / band-core): a cor da marca e o núcleo das faixas de cenário. Fora do gráfico, aparece apenas nos números de destaque das figuras de contexto (em peso 600).
- **Rampa de Cenário** (band-1 → band-4): as faixas do fan chart, do núcleo à incerteza mais distante, sempre com opacidade de 0.82 a 0.9 sobre o fundo. band-1 também é o trecho "futuro" das linhas de horizonte e o ponto de estado "Previsto"; band-4 tinge a linha ativa da Agenda (55% via color-mix).

### Secondary
- **Violeta Hoje** (violet): a linha "hoje" no gráfico e na faixa de horizonte, o rótulo "nov 2026", o estado "Em tramitação" (anel), a primeira estação da abordagem, o filete da citação, o sublinhado de navegação no hover e o anel de foco (2px, offset 3px).

### Tertiary
- **Tons de Pilar** (tone-1 → tone-6): um tom por pilar, do azul da marca ao violeta. Aparecem só como marca do pilar: o tique de 3px que se estende no hover/target, os traços das entregas e o tique da régua do hero.

### Neutral
- **Mineral** (ground): fundo de página; frio-neutro, nunca creme.
- **Mineral Elevado** (ground-raised): seções quietas (contexto, perguntas) e o fundo dos rótulos de marco e dos círculos de marco.
- **Navy Tinta** (ink): títulos, texto forte, a linha do passado, o trecho "passado" das linhas de horizonte, estado "Em vigor", botão primário.
- **Ardósia** (ink-soft): corpo de texto, intros, datas da Agenda.
- **Ardósia Clara** (ink-muted): notas de fonte, referências [Q-0X], cabeçalhos de tabela, numeração.
- **Régua** (rule) e **Régua Forte** (rule-strong): divisórias de 1px de seções, linhas e listas; régua forte para o filete da assinatura e sublinhados discretos.
- **Grade** (grid): as verticais de ano do gráfico.

### Named Rules
**The Light-Not-Neon Rule.** O azul é luz difusa e translúcida em camadas sobre fundo claro, nunca traço neon saturado sobre escuro.

**The One Present Rule.** O violeta marca "hoje", o que está em movimento e o foco. Uso decorativo dele dilui o presente.

**The Past-Ink, Future-Light Rule.** Toda linha de tempo é tinta até "hoje" e azul (band-1) depois dela: fan chart, faixa de horizonte da Agenda e rota da abordagem.

## Typography

**Display Font:** Hanken Grotesk Variable (auto-hospedada via @fontsource-variable; fallback system-ui, sans-serif)
**Body Font:** Hanken Grotesk Variable
**Label/Mono Font:** Hanken Grotesk Variable com algarismos tabulares e lineares ('tnum', 'lnum' ligados em todo o documento)

**Caráter:** grotesca de relatório, sóbria e exata. Uma única família faz tudo; a hierarquia vem de tamanho, peso 500 vs 400 e tracking negativo nos tamanhos grandes.

### Hierarchy
- **Display** (500, 4.43cqw no quadro do hero ≈ 64px a 1440, entrelinha 0.985, −0.038em): só o título do hero, em três linhas fixas. No mobile, clamp(2.35rem, 10.5vw, 3.6rem) / 1.02.
- **Display de fechamento** (500, clamp(2.4rem, 4.4vw, 4.8rem), 1.04): o título do CTA final, máx. 14ch.
- **Headline** (500, clamp(2rem, 3.3vw, 3.6rem), 1.04, −0.032em, text-wrap: balance): títulos de seção; variante estreita em 18ch.
- **Title** (500, clamp(1.5rem, 2vw, 2.1rem), 1.1, −0.015em): nomes de pilar; etapas e setores em degraus próximos (≈1.3–2rem).
- **Statement** (400, clamp(1.25rem, 1.75vw, 1.8rem), 1.3, −0.015em): afirmações de linha inteira (figuras de contexto, perguntas ao Conselho, citação), 34–40ch.
- **Intro** (400, clamp(1.05rem, 1.15vw, 1.25rem), 1.55, ink-soft): parágrafo de abertura ao lado do título, 46ch.
- **Body** (400, 1.0625rem, 1.6, ink-soft): texto corrido, 48–58ch.
- **Label** (400, 0.8125rem, 1.4, ink-muted): notas de fonte, referências [Q-0X], cabeçalhos de tabela, eixos. Caixa normal, sem tracking.

### Named Rules
**The Tabular Rule.** Datas, anos, referências e números usam algarismos tabulares e lineares; nunca desligue 'tnum'/'lnum'.

**The One Family Rule.** Hanken Grotesk para tudo. Peso máximo 600, e só para o número de destaque; títulos ficam em 500.

## Layout

- **Hero como quadro fixo:** no desktop o hero é um quadro em proporção 2752:1536 com container queries (cqw); gráfico, título, marcos, eixo e régua de pilares são posicionados nesse quadro, o título à esquerda (passado) e o futuro à direita a partir da linha "hoje". Abaixo de 900px o quadro vira fluxo vertical: masthead, título, gráfico compacto recortado em torno de "hoje", lista de marcos e pilares em grade de 2 colunas.
- **Margem suíça:** conteúdo com margem lateral de 8.3vw (1.25rem no mobile), sem contêiner de largura máxima.
- **Ritmo de seção:** cada seção tem padding vertical clamp(5rem, 9vw, 9.5rem) e uma régua de 1px no topo; o fechamento respira mais (clamp(6rem, 11vw, 11rem)). Seções quietas trocam o fundo para ground-raised.
- **Cabeçalho em par:** título e intro lado a lado (1.1fr / 1fr, alinhados pela base, gap 6vw), seguidos de clamp(3rem, 5vw, 5rem) até o conteúdo.
- **Listas regradas:** pilares, contexto, setores, perguntas e ecossistema são linhas com régua superior, padding vertical ≈2rem e colunas internas (rótulo estreito + conteúdo). Abaixo de 900px colapsam para uma coluna; a Agenda vira blocos empilhados; a rota de abordagem passa a vertical.
- **Breakpoint único:** 900px.

## Elevation & Depth

Plano por padrão. A profundidade vem das camadas translúcidas das faixas do fan chart (cinco opacidades sobrepostas), da troca de fundo ground → ground-raised nas seções quietas e das réguas. A única sombra do sistema é a dos rótulos de marco sobre o gráfico, uma sombra ambiente curta que os separa das faixas.

### Shadow Vocabulary
- **Rótulo de marco** (`box-shadow: 0 1px 4px rgb(10 26 54 / 0.12)`; no hover/foco sobe para `0 2px 9px rgb(10 26 54 / 0.18)` com translateY de ~1px): apenas para rótulos que flutuam sobre o gráfico.

### Named Rules
**The Flat Page Rule.** Seções, linhas e tabelas nunca têm sombra; a sombra existe só para separar uma anotação do gráfico.

## Shapes

Geometria reta e fina: réguas e divisórias de 1px, eixos de ano, tiques de pilar de 3px, cantos de 2px em botão, rótulos e foco. Os únicos círculos são marcadores de dado (marcos do gráfico, pontos de estado, estações da rota). As únicas curvas livres são a linha do passado e as faixas de cenário. Sem pílulas, sem cantos grandes, sem cartões.

## Components

### Buttons
Um único botão, sóbrio e firme, reservado ao CTA final.
- **Shape:** quase reto (2px).
- **Primary:** fundo navy tinta, texto mineral, 500, padding 1rem 1.5rem, seguido de um traço de 1.25rem em currentColor.
- **Hover / Focus:** o fundo clareia para ink-soft e o traço se estende (scaleX 1.6) em 0.4–0.5s com ease-out; foco pelo anel violeta global.
- **Links de ação:** fora do CTA, ações são links sublinhados (sublinhado rule-strong que vira violeta no hover), como "Explorar os pilares".

### Status (Agenda do Conselho)
- **Em vigor:** ponto cheio navy (0.6rem).
- **Em tramitação:** anel violeta de 2px.
- **Previsto:** ponto cheio azul (band-2 na tabela, band-1 na faixa de horizonte).

### Navigation
- Masthead sobre o hero: logo oficial + wordmark "QUASAR" (500, tracking 0.035em) à esquerda, seis links em linha à direita. Hover: sublinhado violeta de 1px que cresce da esquerda (0.5s ease-out). No mobile, a navegação quebra em linhas abaixo da marca. O rodapé repete marca, assinatura e links em ink-soft.

### Fan chart (assinatura)
SVG com: verticais de ano em grid; linha do passado em tinta (3.2) até "hoje"; tendência e linha central pontilhadas em tinta a 30–35%; cinco faixas band-core → band-4 abrindo a partir de "hoje" até 2035; linha "hoje" violeta (4) rotulada "HOJE" e "nov 2026"; marcos como círculos ground-raised com contorno tinta, ligados por guias pontilhadas ao eixo e a um rótulo com referência [Q-0X]. Nota "Fonte: …" no canto inferior direito. Piso de legibilidade dentro do quadro: rótulo de marco `max(0.9cqw, 0.8125rem)`, referência [Q-0X] `max(0.78cqw, 0.75rem)` em tinta (nunca cinza sobre as faixas), nota de fonte `max(0.82cqw, 0.75rem)`. Movimento único no carregamento: o passado se desenha (1.1s), as faixas se abrem da esquerda para a direita a partir de "hoje" (1.9s), os marcos aparecem em sequência; tudo desligado em prefers-reduced-motion.

### Régua e índice de pilares
Seis pilares numerados (01–06) com o seu tom. Na régua do hero, um tique colorido curto sobre régua de 1px que se estende no hover/foco. No índice, cada linha tem número, nome + resumo e entregas com traços no tom do pilar; o tique de 3px se estende por toda a linha no hover e no :target.

### Linha de horizonte
Eixo 2025–2035 de 1px, tinta até "hoje" e band-1 depois, com a linha "hoje" violeta e pontos de estado empilhados em raias quando coincidem. Usado na Agenda; a rota da abordagem é a mesma gramática com estações (a primeira em violeta).

### Tabela regida pelo tempo
Agenda do Conselho: colunas Quando / Marco / O que muda / Situação / Fonte, réguas de 1px, cabeçalho em label ink-muted, linha com endereço próprio e realce band-4 no hover/target. Nota de verificação com data abaixo.

## Do's and Don'ts

### Do:
- **Do** usar dados e marcos reais, sempre com fonte visível junto ao dado (NIST, BCB/CMN, ISO, WEF, IBM) e data de verificação.
- **Do** fazer as faixas parecerem luz: band-core → band-4 translúcidas (0.82–0.9), em camadas, abrindo a partir de "hoje".
- **Do** desenhar toda linha de tempo como tinta até "hoje" e azul depois, com "hoje" em violeta.
- **Do** numerar o sistema (Q-0X, 01–06) e dar endereço próprio a cada marco e pilar.
- **Do** manter o logo oficial (public/brand/quasar-mark.png) e o azul da marca.
- **Do** manter notas e rótulos em no mínimo 0.8125rem nas seções.
- **Do** usar imagens conceituais e arquitetônicas onde houver fotografia.

### Don't:
- **Don't** inventar dados, projeções ou métricas para preencher gráficos. Uma ilustração de cenário sem valor numérico deve ser rotulada como ilustrativa.
- **Don't** virar banco central frio: nada de gráfico burocrático, cinza e sem luz.
- **Don't** usar fundo escuro dominante, azul neon, glows, orbes ou estética futurista.
- **Don't** usar hackers, encapuzados, código, telas, cadeados, escudos, cadeias de números, estética militar ou gamer, ou foto de banco óbvia (lista do briefing).
- **Don't** usar o violeta como decoração; ele significa presente, movimento ou foco.
- **Don't** embrulhar conteúdo em cartões com sombra; use linhas regradas.
- **Don't** redesenhar ou recriar o logo; use o asset oficial.

---

## Apêndice — Legado (site atual quasar.ia.br, levantado em 2026-11-09)

Apenas referência. **Não é a direção do novo site.** Útil para continuidade de marca (azuis do logo) e para saber o que evitar.

- **Cores (variáveis `--quasar-*` + estilos renderizados):**
  - fundos #0B0F15 / #0D1117;
  - cartões #111823 / #141A23;
  - navy #002B5B; azul #108CCF; ciano #20B6ED; gelo #8CDCFF;
  - violeta #6C42F5 (CSS declara #7C62FF); lavanda #BEAAFF;
  - coral #FF6464 (campos obrigatórios);
  - texto #FFFFFF / #B5BFCC / #DCE4EE;
  - borda rgba(255,255,255,0.08);
  - gradiente de assinatura violeta→azul (100–135°);
  - hero em linear-gradient(135deg, #04182C, #00375D 60%, #0875A9) com orbes radiais.
- **Tipografia:**
  - Syne 600 nos títulos (hero 76px / −0.045em; seções 56px / −0.035em, em caixa alta; cartões 20px);
  - Inter no corpo (16px / 1.72, peso 400), no menu (14px / 650) e nos rótulos (13px / 800 / tracking 0.15em);
  - vazamentos de Arial, Manrope e Work Sans.
- **Formas e profundidade:**
  - raios de 12 / 18 / 24px, pílula 999px e canto inferior de 72px no hero;
  - sombras 0 18px 55px rgba(0,0,0,.18) e glow de botão 0 12px 30px rgba(34,133,223,.2);
  - cartões translúcidos com borda finíssima.
- **Componentes:**
  - botão-pílula com gradiente;
  - selo numerado "01–04";
  - acordeão de FAQ;
  - tabelas "Desafio / Solução";
  - formulário escuro com captcha.

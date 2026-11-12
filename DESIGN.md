---
name: QUASAR
description: Consultoria estratégica em risco tecnológico, IA e segurança pós-quântica, na linguagem visual das líderes globais de cyber e consultoria.
colors:
  navy-950: "#070c18"
  navy-900: "#0a1222"
  navy-850: "#10192e"
  navy-800: "#16223b"
  navy-700: "#22304d"
  line: "rgb(255 255 255 / 0.12)"
  line-strong: "rgb(255 255 255 / 0.22)"
  text: "#f5f7fa"
  text-soft: "#a7b0bf"
  text-muted: "#7d8798"
  blue: "#0b8fd6"
  blue-hover: "#2ba3e6"
  blue-bright: "#3fb4ff"
  paper: "#f3f5f8"
  paper-raised: "#ffffff"
  ink: "#0a1a36"
  ink-soft: "#3b4a5e"
  ink-muted: "#5d6a7b"
  rule: "#d9dee5"
typography:
  display:
    fontFamily: "'Bricolage Grotesque Variable', 'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "4.58vw"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Bricolage Grotesque Variable', 'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 3.6vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Bricolage Grotesque Variable', 'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 1.7vw, 1.9rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  stat:
    fontFamily: "'Bricolage Grotesque Variable', 'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2rem, 2.9vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "'Vend Sans Variable', 'Vend Sans', system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.2vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Vend Sans Variable', 'Vend Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'tnum' 1, 'lnum' 1"
  label:
    fontFamily: "'Vend Sans Variable', 'Vend Sans', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
  wordmark:
    fontFamily: "'Syne', 'Bricolage Grotesque Variable', sans-serif"
    fontWeight: 700
    letterSpacing: "0.02em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  pill: "999px"
spacing:
  gutter: "8.1vw"
  gutter-mobile: "1.25rem"
  section: "clamp(5rem, 8vw, 9rem)"
  head-gap: "clamp(2.5rem, 4.5vw, 4.5rem)"
  grid-gap: "clamp(1rem, 1.6vw, 1.75rem)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.pill}"
    height: "3.5rem"
    padding: "0 2rem"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-ghost:
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.pill}"
    height: "3.5rem"
    padding: "0 2rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.navy-900}"
  button-ink:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  card-pillar:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.4rem, 2vw, 2.2rem)"
  card-insight-image:
    backgroundColor: "{colors.navy-800}"
    rounded: "{rounded.md}"
  card-sector:
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.75rem 2rem"
  mega-menu:
    backgroundColor: "{colors.navy-850}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "1.25rem 0.5rem"
  mega-menu-link-hover:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.blue-bright}"
    rounded: "{rounded.sm}"
---

# Design System: QUASAR

## Overview

**Creative North Star: "A Sala do Conselho à Noite"**

A QUASAR v2 fala a língua visual das líderes globais de cyber e consultoria: chão navy profundo, fotografia noturna de cidade e executivo em tela cheia, títulos brancos fortes e CTAs em pílula. A autoridade vem do porte (fotografia grande, tipografia display larga, muito ar entre seções), não de efeitos. O azul da marca é o único acento e aparece como sinal: a palavra-chave do título, os números com fonte, o estado ativo, a ação principal.

A página alterna faixas escuras (navy) e faixas claras de papel para leitura longa: contexto, agenda e setores no escuro; pilares, abordagem e perspectivas no claro. Densidade de consultoria: blocos de título com subtítulo à direita, grades de três, tabelas com fonte em cada linha. Imagem sempre fotográfica ou atmosférica (cidade, luz, infraestrutura), nunca ilustração de ameaça.

O sistema recusa explicitamente o site de cyber amador (neon, hacker de capuz, cadeado, código verde) e o institucional genérico de template.

**Key Characteristics:**
- Chão navy (#0A1222) com faixas de papel (#F3F5F8 / #FFFFFF) para leitura.
- Um único acento azul em dois tons: base para ação, brilho para sinal sobre escuro.
- Bricolage Grotesque 700 nos títulos, Vend Sans no texto, Syne 700 só no wordmark.
- Pílulas como única linguagem de botão; cards com cantos de 12–14px.
- Fotografia noturna com gradiente navy lateral para legibilidade do texto.
- Todo dado numérico ou regulatório carrega fonte visível.

## Colors

Navy profundo em cinco degraus, um azul de marca em três estados e um par papel/tinta para as faixas claras.

### Primary
- **Azul QUASAR** (blue): pílula sólida, números das etapas, link "Ler perspectiva", trilho de progresso da abordagem, marcos previstos no horizonte. É a cor de ação.
- **Azul QUASAR Hover** (blue-hover): só o hover da pílula sólida.
- **Azul Brilho** (blue-bright): o mesmo acento ajustado para fundo escuro. Palavra-chave do título do hero, números do contexto, cargo na liderança, hover de links e menu, marcador "HOJE", anel de foco.

### Neutral
- **Navy Abissal** (navy-950): barra utilitária, banda de contato, rodapé, base das sobreposições de foto.
- **Navy Noturno** (navy-900): chão padrão da página e das seções escuras; `theme-color`.
- **Navy Elevado** (navy-850): barra de navegação, mega-menu, banda do AI Summit.
- **Navy Card** (navy-800): fundo de espera dos cards com imagem, hover dos itens do mega-menu.
- **Navy Trilho** (navy-700): barra de rolagem.
- **Linha** (line) e **Linha Forte** (line-strong): divisores e bordas sobre escuro (12% e 22% de branco).
- **Texto** (text), **Texto Suave** (text-soft), **Texto Mudo** (text-muted): títulos/corpo, leads e descrições, fontes e metadados sobre escuro.
- **Papel** (paper) e **Papel Elevado** (paper-raised): faixas claras de leitura (pilares/abordagem e perspectivas, respectivamente).
- **Tinta** (ink), **Tinta Suave** (ink-soft), **Tinta Muda** (ink-muted), **Régua** (rule): texto e divisores sobre papel.

### Named Rules
**The One Accent Rule.** Só existe um matiz de acento: o azul QUASAR. Não há secundária nem terciária; o violeta declarado no stylesheet não é usado e não faz parte do sistema.

**The Bright-on-Dark Rule.** Sobre navy, o acento de texto é sempre o Azul Brilho; sobre papel, o Azul QUASAR. Nunca o contrário.

**The Banded Reading Rule.** Leitura longa e grades de cards vão em faixas de papel; números, agenda e setores ficam no navy. Duas faixas da mesma família não se repetem sem motivo.

## Typography

**Display Font:** Bricolage Grotesque Variable (com system-ui)
**Body Font:** Vend Sans Variable (com system-ui)
**Wordmark Font:** Syne 700, exclusivamente no wordmark QUASAR (cabeçalho e rodapé)

**Character:** Bricolage dá peso e personalidade editorial aos títulos com tracking apertado; Vend Sans é neutra, técnica e legível, com algarismos tabulares e alinhados no documento inteiro.

### Hierarchy
- **Display** (700, 4.58vw no desktop; clamp(2.3rem, 8.5vw, 3.6rem) abaixo de 1100px; 1.05; -0.03em): só o título do hero, em duas linhas.
- **Headline** (700, clamp(2.1rem, 3.6vw, 4.2rem), 1.04, -0.03em, text-wrap balance): títulos de seção. A banda de contato sobe para clamp(2.3rem, 4.4vw, 5rem).
- **Title** (600, clamp(1.3rem, 1.7vw, 1.9rem), 1.1–1.15, -0.015em): títulos de card, etapa, setor. A citação da liderança usa a mesma família em 500.
- **Stat** (700, clamp(2rem, 2.9vw, 3.6rem), 1, -0.03em): números do contexto em Azul Brilho; números de etapa (2.25rem) em Azul QUASAR.
- **Lead** (400, clamp(1.05rem, 1.2vw, 1.3rem), 1.55, máx. 46ch): subtítulo de cada bloco de título.
- **Body** (400, 1rem–1.0625rem, 1.5–1.65, máx. 60ch): texto de card, tabela, biografia.
- **Label** (400–500, 0.8125rem): fontes, referências, eixo de anos, cabeçalho de tabela e de coluna do rodapé (estes dois em caixa alta com 0.04–0.06em, função estrutural de tabela/navegação).

### Named Rules
**The Wordmark Only Rule.** Syne aparece só no wordmark. Nenhum título, número ou botão usa Syne.

**The Tabular Rule.** Todo o documento roda com `'tnum' 1, 'lnum' 1`: números de risco e datas alinham como em relatório.

## Layout

Margem lateral fluida de 8.1vw no desktop (1.25rem abaixo de 1100px), sem container de largura máxima. Seções com respiro vertical de clamp(5rem, 8vw, 9rem). O bloco de título padrão é uma grade de duas colunas (1.1fr / 1fr) com o título à esquerda e o lead alinhado pela base à direita; seções de "título + conteúdo" (contexto, setores) usam 0.9fr / 1.3fr. Grades de cards em três colunas com gap clamp(1rem, 1.6vw, 1.75rem).

O hero desktop é composto em vw a partir do comp aprovado (altura 46.15vw, foto em 38.88vw, faixa de destaques translúcida sobreposta à base). Abaixo de 1100px tudo vira fluxo: hero com foto a 60% de opacidade, destaques empilhados, grades em uma coluna (pilares em duas até 640px, depois uma), linha de abordagem vertical, tabela da agenda vira lista de blocos e o horizonte esconde rótulos e anos alternados.

## Elevation & Depth

Sistema plano com camadas tonais. A profundidade vem dos degraus de navy (950 a 800), de gradientes sobre fotografia e de um único painel translúcido. Sombra existe em um só lugar: o mega-menu, que flutua sobre o hero.

### Shadow Vocabulary
- **Flutuação do menu** (`box-shadow: 0 24px 60px rgb(0 0 0 / 0.45)`): só o mega-menu aberto no desktop.

### Named Rules
**The Tonal Depth Rule.** Superfícies não ganham sombra; sobem um degrau de navy ou ganham uma borda de Linha. Hover em card é escala da imagem (1.05) ou troca de borda, nunca elevação.

**The Photo Veil Rule.** Toda foto com texto por cima leva um véu navy em gradiente (lateral no hero e na banda de contato, vertical nos cards de pilar) que garante contraste antes de qualquer coisa.

## Shapes

Três raios e a pílula. 8px para elementos pequenos (itens do mega-menu, placa do logo do AI Summit), 12px para cards e imagens editoriais e setores (e para a faixa de destaques no mobile), 14px para cards de pilar e o mega-menu. A faixa de destaques do hero usa 0.7vw no desktop (cerca de 10px a 1440). Botões, burger e anéis de status são totalmente redondos. Bordas são finas (1px de Linha) e as pílulas de contorno usam 2px.

## Components

### Buttons
Pílulas confiantes, sem ícone, peso 500.
- **Shape:** totalmente arredondado (999px).
- **Primary (sólida):** Azul QUASAR com texto branco; altura 3.5rem e 2rem de padding lateral nas bandas, 3rem no mobile.
- **Ghost (contorno):** borda 2px de branco a 85%, texto branco; uso sobre foto ou navy.
- **Ink (contorno):** borda 2px Tinta, texto Tinta; equivalente do ghost sobre papel.
- **Hover / Focus:** sólida clareia para Azul QUASAR Hover; contornos preenchem (branco com texto navy, ou tinta com texto branco); transição de 0.35s em ease-out expo. Foco global: contorno 2px Azul Brilho com 3px de afastamento.
- **Par padrão:** sólida + contorno lado a lado, ação primária primeiro.

### Cards / Containers
- **Card de pilar:** retrato 4:5 (3:4 abaixo de 640px), raio 14px, imagem cobrindo tudo com véu vertical navy, título, resumo e lista de entregas sob um divisor de 18% de branco, com marcadores em traço curto Azul Brilho.
- **Card de perspectiva:** imagem 3:2 com raio 12px sobre papel, título, texto e "Ler perspectiva" em Azul QUASAR com seta que desliza 4px no hover.
- **Card de setor:** bloco de borda (1px Linha Forte, raio 12px, padding 1.75rem 2rem) no navy; hover troca a borda para Azul QUASAR com fundo azul a 6%.
- **Estatística com fonte:** divisor superior de Linha Forte, número em Stat, texto e "Fonte:" em Label mudo.

### Navigation
- **Barra utilitária:** Navy Abissal, links em Texto Mudo separados por ponto, alinhados à direita.
- **Barra principal:** Navy Elevado com borda inferior de Linha; wordmark Syne à esquerda, gatilhos de menu com chevron que gira 180° ao abrir, pílula sólida "Fale com a QUASAR" à direita.
- **Mega-menu:** painel Navy Elevado de raio 14px com a sombra de flutuação; itens com raio 8px, hover Navy Card + Azul Brilho; pilares em duas colunas com referência em Label mudo.
- **Mobile:** burger circular com borda Linha Forte abre gaveta em coluna; gatilhos viram linhas divididas e submenus expandem em linha.

### Faixa de destaques (assinatura)
Painel translúcido sobre a base do hero: navy-800 a 82% com blur de 14px, borda de Linha, três colunas separadas por Linha Forte. Cada item é só o título (a categoria está dobrada no texto) com seta que acompanha a última palavra e desliza no hover, que também tinge o título de Azul Brilho.

### Horizonte da Agenda (assinatura)
Linha do tempo 2025–2035 acima da tabela: trilho branco até hoje e Azul QUASAR depois, marcador vertical "HOJE" em Azul Brilho, pontos por situação (branco = em vigor, anel Azul Brilho = em tramitação, Azul QUASAR = previsto). A mesma legenda de pontos se repete na coluna Situação da tabela. Linhas da tabela têm endereço próprio e realce azul a 10% no hover e no alvo.

### Linha de processo
Etapas numeradas em Stat azul sobre trilho de 1px que vai de Azul QUASAR (etapa atual) a Régua; marcador circular cheio na primeira etapa e vazado nas demais. Vira vertical no mobile.

## Do's and Don'ts

### Do:
- **Do** manter o navy (#0A1222) como chão e usar papel (#F3F5F8 / #FFFFFF) só para faixas de leitura e grades de cards.
- **Do** usar o Azul Brilho para sinal sobre escuro e o Azul QUASAR para ação e sinal sobre papel.
- **Do** usar pílulas (999px) para todo botão, em par sólida + contorno.
- **Do** manter cards em 12px (editorial, setor) e 14px (pilar, painéis flutuantes).
- **Do** colocar véu navy em gradiente sob qualquer texto sobre foto.
- **Do** mostrar a fonte de todo número e marco regulatório, em Label mudo logo abaixo.
- **Do** usar fotografia noturna de cidade, luz e infraestrutura, ou a foto real da liderança.
- **Do** abrir cada seção com título Headline e lead à direita alinhado pela base.

### Don't:
- **Don't** inventar dados, clientes, números ou depoimentos; todo número exige fonte verificável.
- **Don't** usar imagens de hackers, cadeados, escudos, código ou matrizes de caracteres.
- **Don't** usar neon, glitch ou verde-terminal; a página recusa o site de cyber amador.
- **Don't** colocar rótulos de categoria (kickers/eyebrows) acima dos títulos; a categoria entra no próprio título.
- **Don't** introduzir um segundo matiz de acento.
- **Don't** usar Syne fora do wordmark nem fontes do sistema em títulos.
- **Don't** dar sombra a cards; profundidade é tonal.
- **Don't** usar botões retangulares ou de canto pequeno.

## Apêndice — Histórico

- **v1 "Horizonte de Cenários"** (arquivada): mundo claro mineral com leque de cenários e Hanken Grotesk. Substituída integralmente pela v2; nenhum token da v1 é vigente.
- **Site legado quasar.ia.br**: referência de conteúdo apenas; não é a direção visual.

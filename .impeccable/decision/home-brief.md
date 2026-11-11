# Home — site institucional QUASAR

## Scope

Home do novo site (várias páginas). Modo de visitante: **Persuade**. A conversão principal é explorar e ler primeiro: a home conduz a pilares e insights, e o contato vem depois, sem pressão comercial.

## Audience, job, proof

- **Público:** CEOs, Conselhos, CIO/CISO/CTO/CFO de médias e grandes empresas e instituições financeiras.
- **O que o visitante deve concluir:** "esta empresa entende tecnologia, risco e estratégia, e eu a colocaria diante do meu Conselho".
- **Provas:** marcos regulatórios e científicos reais com fonte (NIST IR 8547 2030/2035, Res. CMN 5.274, ISO 27001:2022, WEF 2026, IBM CODB); os 6 pilares; a trajetória de Jorge Muzy; o ecossistema AI Summit/AINEWS.
- **Restrições:** manter logo e azul da marca. Não pode parecer "frio demais/banco" nem "escuro e futurista". Nenhum dado ou cliente inventado.

## Direction contract

THESIS: A home é um cenário, não um banner: o futuro se abre a partir de "hoje" em faixas de probabilidade com marcos reais. A página recusa o hero escuro de cyber (escudo, neon, foto de banco) e o hero corporativo com skyline.
OWN-WORLD: Fundo claro mineral (#F5F6F3) e tinta navy (#0E2A47). As faixas do fan chart são em azul QUASAR translúcido e luminoso (#108CCF→#8EC9EA). "Hoje" e os estados ativos são violeta (#6C42F5). Grotesca de relatório com algarismos tabulares, notas de fonte em corpo pequeno e referências Q-01…
STORY: O visitante vê o futuro mapeado, entende que a QUASAR antecipa, explora os pilares e os marcos com fonte e chega a insights e liderança.
FIRST VIEWPORT: O título ocupa a coluna esquerda em escala display, com a assinatura abaixo. O fan chart sai do ponto "hoje" e vai até 2035, ocupando metade direita e centro. Os seis pilares numerados formam uma régua na base. A ação primária é "explorar os pilares", pela régua e por um link.
FORM: Gráficos de cenário de banco central (fan charts), item 3 da lista ordenada; seed 82511b05.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

O fan chart se desenha ao carregar, com as faixas abrindo a partir de "hoje". Cada marco abre uma nota com fonte e tem endereço próprio (raise do HyperCard).

## Raises (do round)

- Catálogo: numeração Q-01… em pilares, insights e marcos; o índice é o mapa.
- Cidade dobrada: cada pilar com a sua faixa de tom na família azul→violeta.
- HyperCard: cada marco e cenário tem URL própria.
- Split-flap: a Agenda do Conselho é uma tabela regida pelo tempo, com estados (em vigor / em tramitação / previsto).
- Angura: composição de origem única ("hoje").

## Approved comp

`.impeccable/mocks/home-comp-1-horizonte.png` (aprovado pelo usuário em 2026-11-11 na rodada de comps; as alternativas foram 2 · Palco e 3 · Relatório denso). Não literalizar do comp:
- os erros do eixo;
- os rótulos de marco gerados: usar texto e fonte verificados;
- o logo redesenhado pelo gerador: usar o logo oficial da QUASAR.

## Unresolved

- Stack do site.
- Fontes exatas: serão medidas no comp (font-match) na fase de spec.
- Eixo do comp com erros a corrigir no build: "HOJE" duplicado e 2024 depois de hoje; a escala deve começar em 2026.

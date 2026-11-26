# Site v3 — prompts do Midjourney

Todas as imagens do site v3 estão hoje com o placeholder (`public/images/placeholder.jpg`). Cada imagem tem um **slot** (id). Para substituir:

1. Salve a arte final em `public/images/v3/<id>.jpg` (desktop) e, quando houver versão mobile, em `public/images/v3/<id>-m.jpg`.
2. Acrescente o id ao conjunto `ready` em `src/data/images.ts`.

Também dá para me enviar os arquivos, que eu faço a troca.

## Formatos

| Tipo | Desktop | Mobile | Onde aparece |
|---|---|---|---|
| **Arte de seção** | 1920×1080 (`--ar 16:9`) | 1080×1920 (`--ar 9:16`) | Seções de fundo da home, heróis das páginas internas |
| **Card do carrossel** | 1200×1500 (`--ar 4:5`) | — (a mesma imagem) | Carrossel "Nossas soluções" |
| **Capa de linha editorial** | 1600×900 (`--ar 16:9`) | — (a mesma imagem) | Cards e topo dos artigos (com véu escuro forte) |

## Onde o texto fica (para a edição)

- **Seção com texto à esquerda** (padrão): no desktop, o texto ocupa os ~45% da esquerda, centralizado na vertical. Deixe esse lado escuro e sem detalhes; o assunto vai para a direita. No mobile, o texto ocupa os ~55% de cima, então o assunto vai para a parte de baixo.
- **Seção centralizada** (03 · Ideia central): no desktop, o texto fica no centro, numa faixa de ~60% da largura. Deixe o centro limpo e jogue o interesse para as bordas e para o horizonte baixo. No mobile, o texto fica do topo até o meio.
- **Seção com texto à direita** (Autoridade): o espelho do padrão — assunto à esquerda.
- **Herói de página interna**: no desktop, o texto fica embaixo à esquerda (título, linha de apoio e botões, nos ~55% de baixo e ~50% da esquerda). Deixe o canto inferior esquerdo escuro; o assunto vai para cima e para a direita. No mobile, o texto ocupa os ~60% de baixo, então o assunto vai para o terço de cima.
- **Cards 4:5**: o título e o texto ficam nos ~45% de baixo, sobre um degradê escuro; há um ícone no canto superior esquerdo. O assunto vai para o terço do meio para cima.
- **Capas 16:9**: aparecem cortadas em 16:9 nos cards e muito escurecidas atrás do título do artigo. O assunto deve ficar centralizado e legível em tamanho pequeno.

O site aplica um véu escuro em degradê sobre todas as artes, então elas podem ter mais luz do que parece. Ainda assim, as áreas de texto devem ficar escuras.

## Estilo comum (já incluído em cada prompt)

Fotografia editorial cinematográfica, corporativa e premium. Base em preto profundo (#03070B) e grafite azulado, com luz ciano (#00A3D6 / #35C6F0) dominante e um toque de violeta (#7C5CFF) só como brilho de canto. A paleta segue o guia da marca.

**Evitar** (guia, seção 1): caveira, hacker encapuzado, cadeado quebrado, vermelho de alarme, código "Matrix", qualquer imagem de medo, texto, logotipos e rostos de pessoas reais.

Parâmetros sugeridos: `--v 7 --style raw --s 150`. Ajuste `--ar` conforme a versão.

Sufixo negativo usado em todos: `--no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain`

---

## Home

### `home-hero` — Hero (texto à esquerda)
**Desktop `--ar 16:9`:**
```
cinematic wide shot of a modern glass boardroom at blue hour, high floor overlooking a dense city skyline, two senior executives seen from behind standing near the window, soft cyan rim light, subtle violet glow in the top right corner, polished dark table reflecting city lights, left half of the frame in deep shadow and empty for text, photorealistic, premium corporate editorial photography, deep black #03070B and cyan #00A3D6 palette, shallow depth of field --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile `--ar 9:16`:** mesmo prompt, trocando "left half of the frame in deep shadow and empty for text" por "top 55% of the frame dark night sky and empty for text, executives and skyline in the lower third".

### `home-quem-somos` — 01 · Quem somos (texto à esquerda)
```
applied science meets cybersecurity: a dark research lab with a large translucent glass panel showing faint cyan data structures and molecular-like network graphs, a scientist's hands adjusting a holographic interface on the right side of the frame, volumetric cyan light, subtle violet accent glow, left side deep black and empty for text, photorealistic, editorial, premium --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "top half deep black and empty for text, the lab interface and hands in the lower 40%".

### `home-solucoes` — 02 · Nossas soluções, fundo do carrossel (muito escurecido)
```
abstract core of data: a glowing sphere-like data core made of thin cyan light filaments at the far right, concentric layered rings fading into darkness, ultra dark background, minimal detail, soft violet bloom at the top right edge, large calm dark areas, cinematic, high-end tech abstract --ar 16:9 --v 7 --style raw --s 120 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "data core at the bottom of the frame, top two thirds almost black".

### `home-ideia` — 03 · Ideia central (texto centralizado)
```
aerial night view from very high altitude over a vast city grid at the horizon, thin flowing light trails in cyan curving forward ahead of the traffic as if anticipating the path, horizon line in the lower third, center of the frame dark and calm for a large headline, faint violet glow on the right edge, cinematic, photorealistic, sense of foresight --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "city lights and light trails only in the bottom 35%, the rest dark sky".

### `home-autoridade` — Autoridade e liderança internacional (texto à direita)
```
international executive conference stage seen from the audience, a speaker silhouette at a minimalist podium on the left side of the frame, huge dark LED wall with soft abstract cyan gradients (no text), audience heads in soft focus in the foreground, right half dark and empty for text, cinematic stage lighting in cyan with a violet accent, photorealistic, premium event photography --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "stage and speaker in the bottom 40%, dark upper area for text".
> Se houver foto real de palco do AI Summit com o André ou o Jorge, ela substitui esta arte com vantagem.

### `home-newsletter` — 04 · Ciber no Conselho (texto à esquerda)
```
close-up of a dark boardroom table at night, a tablet glowing with soft abstract cyan charts (no readable text), a printed confidential report and a fountain pen, a glass of water catching cyan light, positioned on the right side of the frame, left side in deep shadow and empty, moody low-key lighting, subtle violet reflection, editorial still life, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "still life in the bottom 40% of the frame".

### `home-contato` — 05 · Contato (texto à esquerda). Também é o herói da página Diagnóstico Executivo
```
premium executive meeting room prepared for a strategy session, empty leather chairs around a dark table, a large screen on the right wall showing a soft abstract six-layer diagram glowing cyan (no text), city lights through floor-to-ceiling windows, welcoming yet serious, left side dark for text, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "room and screen in the bottom 40%".
> No herói da página Diagnóstico, o texto fica embaixo à esquerda. Se essa área ficar clara demais na arte final, faço uma versão própria para a página.

---

## Home — cards do carrossel "Nossas soluções" (`--ar 4:5`, 1200×1500)

Em todos os cards, mantenha os ~45% de baixo escuros, porque título e texto ficam ali.

### `sol-ia-defesa` — IA aplicada à defesa
```
security operations center at night, two analysts seen from behind facing a curved wall of dark screens with flowing cyan network graphs and anomaly highlights, calm focused atmosphere, subject in the upper half, bottom half falling into darkness, cinematic, photorealistic --ar 4:5 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `sol-modelos-ia` — Segurança de modelos de IA
```
abstract neural network sculpture made of glowing cyan nodes and filaments, enclosed by thin translucent protective shells of light, a soft violet core, floating in darkness, subject in the upper middle, bottom half dark, high-end 3D render, cinematic --ar 4:5 --v 7 --style raw --s 180 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `sol-pos-quantico` — Prontidão pós-quântica
```
macro shot of a quantum processor chandelier, gold and copper tiers with fine wiring, lit by cold cyan light with a violet glow at the core, deep black background, subject in the upper half, bottom half dark, photorealistic, scientific elegance --ar 4:5 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `sol-arquiteturas` — Arquiteturas resilientes (6 camadas)
```
six stacked translucent glass layers floating in perspective, each edge glowing cyan, a soft violet light passing through the center, architectural minimalism, deep black background, subject in the upper half, bottom half dark, premium 3D render --ar 4:5 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `sol-governanca` — Governança e risco
```
board members in a dark boardroom looking at a large table display with an abstract risk heat map glowing cyan and violet (no text), hands and documents visible, faces not prominent, subject in the upper half, bottom half dark, cinematic, photorealistic --ar 4:5 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `sol-diagnostico` — Diagnóstico Executivo
```
a 60-minute executive session: a small group of executives around a table with a consultant pointing at a softly glowing tablet, warm-cool contrast with cyan accent light, intimate and focused, subject in the upper half, bottom half dark, cinematic, photorealistic --ar 4:5 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

---

## Sobre

### `sobre-hero` — Herói (texto embaixo à esquerda)
```
modern corporate headquarters glass facade at dusk, dramatic low angle, interior floors glowing with cool cyan light, reflections of the sky, subtle violet hue at the top right, building occupies the upper right, lower left area dark and quiet, architectural photography, cinematic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "building in the top third, lower 60% dark".

### `sobre-presenca` — Presença Brasil, Canadá e EUA (texto à esquerda)
```
night satellite view of the Americas with city lights, Rio de Janeiro and Vancouver highlighted with soft cyan glows connected by a single elegant arc of light, Earth curvature on the right side of the frame, left side deep space black for text, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```
**Mobile:** "globe and arc in the bottom 40%".

### `andre-silva` — Foto do André Machado da Silva
**Foto real necessária**, no formato 4:5 (ex.: 1000×1250). Não deve ser gerada no Midjourney. Ela também aparece em miniatura, ao lado da foto do Jorge, na seção "Quem somos" da home.

---

## Páginas de categoria (herói, texto embaixo à esquerda)

### `cat-consultoria` — Consultoria Estratégica
```
strategy workshop in a dark premium office, a consultant and two executives at a whiteboard wall with soft cyan projected abstract diagrams (no text), seen from a low side angle, subject in the upper right, lower left in shadow, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `cat-servicos-gerenciados` — Serviços Gerenciados (MSSP)
```
wide shot of a 24x7 security operations center at night, rows of analysts silhouetted against large dark screens with cyan telemetry and world map with abstract connections, calm controlled atmosphere, subject in the upper right, lower left in shadow, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

**Mobile de todos os heróis internos:** troque o enquadramento por "subject in the top third of the frame, lower 60% dark and empty".

---

## Serviços (herói de cada frente, texto embaixo à esquerda)

Use em cada um o final: `subject in the upper right, lower left in shadow, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain`.

| Slot | Frente | Prompt (início) |
|---|---|---|
| `svc-analise-riscos` | Análise e Gestão de Riscos | `overhead view of a dark boardroom table with an abstract risk heat map projected in cyan and violet cells, executive hands and a pen, …` |
| `svc-iso-27001` | ISO 27001 & Frameworks | `neatly organized audit binders and a laptop with abstract compliance checklists glowing cyan, minimalist dark office, sense of order and certification, …` |
| `svc-lgpd-privacidade` | Privacidade & LGPD | `abstract flow of personal data as soft particles passing through translucent protective layers, a silhouette of a person dissolving into protected data points, cyan and violet, …` |
| `svc-ia-nuvem` | Segurança para IA & Nuvem | `a corporate AI assistant visualized as a luminous cyan orb inside a dark data center, surrounded by thin curved barriers of light filtering incoming streams, …` |
| `svc-pos-quantico` | Prontidão Pós-Quântica | `a glowing data core wrapped in lattice-like geometric shells of light (post-quantum lattice cryptography metaphor), quantum chip elements in the background, cyan with violet core, …` |
| `svc-continuidade-dr` | Continuidade & DR | `long data center aisle with a separated, isolated vault rack glowing cyan behind a glass partition, symbol of immutable backup, calm and resilient, …` |
| `svc-automacao` | Automação de Segurança | `elegant abstract workflow of light: cyan lines connecting floating nodes in precise automated sequences, mechanical precision, dark minimal space, …` |
| `svc-soc-mdr` | SOC & Resposta (MDR) 24x7 | `security analyst at night in a modern SOC, face lit by cyan screens, wall clock showing late hour, focus and control, …` |
| `svc-ctem-pentest` | Gestão Contínua de Exposição | `a city-like 3D wireframe of a company's digital attack surface glowing cyan, a scanning beam of violet light sweeping across it, …` |
| `svc-protecao-dados` | Proteção de Dados & Resiliência | `a high-security data vault door slightly open revealing layered cyan light, abstract encryption patterns on the metal, …` |
| `svc-identidade-nuvem` | Identidade & Nuvem | `abstract digital identity: a fingerprint made of cyan light lines verifying against a soft cloud of data points, violet accents, …` |

---

## Outras páginas (herói, texto embaixo à esquerda)

### `metodologia-hero` — Metodologia 6 camadas
```
six translucent horizontal glass plates stacked in perspective with a gap between each, edges glowing cyan, a beam of violet light passing vertically through all of them, deep black void, architectural 3D render, subject in the upper right, lower left in shadow --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `insights-hero` — Insights executivos (herói mais baixo)
```
quiet executive library at night, dark wood shelves and a reading table with an open report and a tablet glowing cyan, a single window with city lights, contemplative, subject in the upper right, lower left in shadow, cinematic, photorealistic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `raiox-hero` — Raio-X Quasar (herói mais baixo)
```
a translucent architectural model of a corporate building being scanned by a horizontal cyan scanning beam, internal structure and layers revealed like an x-ray, violet glow at the scan line, black background, high-end 3D render, subject in the upper right, lower left in shadow --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

A página Newsletter usa `home-newsletter` e a página Diagnóstico usa `home-contato`.

---

## Capas das 5 linhas editoriais (`--ar 16:9`, 1600×900)

Cada artigo usa a capa da sua linha. Mais adiante, cada artigo pode ganhar uma imagem própria.

### `cover-p1` — IA no ataque e na defesa
```
a human face silhouette fragmenting into thousands of cyan light particles on one side and reassembling as a clean outline on the other, metaphor for deepfakes and AI defense, dark background, centered subject, cinematic --ar 16:9 --v 7 --style raw --s 180 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `cover-p2` — Pós-quântico sem mistério
```
close-up of a quantum computing chip with delicate golden wiring, bathed in violet and cyan light, tiny glowing qubits, scientific and elegant, centered subject, black background --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `cover-p3` — Ciber no conselho
```
top-down view of an empty boardroom table at night with leather chairs, a single tablet glowing cyan in the center, long shadows, symmetrical composition, centered subject, cinematic --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `cover-p4` — As 6 camadas na prática
```
isometric view of six translucent protective layers around a small glowing core, each layer a different shade from cyan to violet, clean minimal 3D, centered subject, black background --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

### `cover-p5` — Ciência aplicada e bastidor
```
a dark research lab desk with a glass board covered in faint handwritten equations (illegible), a laptop with abstract cyan graphs, warm desk lamp contrasting with cyan ambient light, centered subject, editorial photography --ar 16:9 --v 7 --style raw --s 150 --no text, letters, logo, watermark, hooded hacker, skull, broken padlock, red alarm lights, matrix code, binary rain
```

---

## Resumo: 35 imagens no Midjourney + 1 foto real

| Grupo | Slots | Versões |
|---|---|---|
| Home (artes) | 7 | desktop + mobile |
| Home (cards) | 6 | única (4:5) |
| Sobre | 2 | desktop + mobile |
| Categorias | 2 | desktop + mobile |
| Serviços | 11 | desktop + mobile |
| Metodologia, Insights, Raio-X | 3 | desktop + mobile |
| Capas editoriais | 5 | única (16:9) |
| Foto do André Silva | 1 | foto real (4:5) |

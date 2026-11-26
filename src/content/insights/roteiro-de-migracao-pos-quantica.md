---
title: "Roteiro de migração pós-quântica em quatro fases"
summary: "Descobrir, priorizar, migrar e validar. Um roteiro realista para transformar a prontidão pós-quântica em projeto, com marcos que a diretoria consegue acompanhar."
pillar: p2
readTime: 6
order: 43
cover: home-ideia
boardQuestion: "Em que fase da migração pós-quântica estamos hoje — e qual é o próximo marco, com data?"
sources:
  - label: "NCSC (Reino Unido) — Timelines for migration to post-quantum cryptography"
    url: "https://www.ncsc.gov.uk/guidance/pqc-migration-timelines"
  - label: "NIST IR 8547 (rascunho) — Transition to Post-Quantum Cryptography Standards"
    url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
  - label: "CISA, NSA e NIST — Quantum-Readiness: Migration to Post-Quantum Cryptography"
    url: "https://www.cisa.gov/resources-tools/resources/quantum-readiness-migration-post-quantum-cryptography"
---

Saber que a criptografia precisa mudar é o primeiro passo. O segundo é organizar a mudança de forma que ela caiba no orçamento, não interrompa a operação e possa ser acompanhada pela diretoria. As agências de referência — NIST, CISA e NSA nos Estados Unidos, NCSC no Reino Unido — convergem em um roteiro parecido, que resumimos em quatro fases.

## Fase 1 · Descobrir

**Objetivo:** saber onde e como a empresa usa criptografia.

- Inventário de sistemas, aplicações, protocolos, certificados, chaves e bibliotecas.
- Mapeamento de fornecedores e serviços em nuvem que usam criptografia em nome da empresa.
- Identificação dos **dados de longa vida** — os que precisam continuar secretos por 10 anos ou mais.

**Entrega para a diretoria:** um mapa da exposição, com o volume de sistemas afetados e onde estão os dados mais sensíveis.

## Fase 2 · Priorizar

**Objetivo:** decidir a ordem da migração.

Três critérios ajudam a priorizar:

1. **Vida útil do dado:** quanto mais tempo ele precisa continuar secreto, mais cedo deve ser protegido.
2. **Exposição:** dados que trafegam por redes externas ou ficam com terceiros têm mais chance de serem copiados.
3. **Dificuldade de troca:** sistemas legados, equipamentos embarcados e soluções de fornecedores sem roteiro levam mais tempo e precisam começar antes.

**Entrega para a diretoria:** uma lista priorizada, com estimativa de esforço e orçamento por fase.

## Fase 3 · Migrar

**Objetivo:** substituir a criptografia vulnerável pelos novos padrões (FIPS 203, 204 e 205 do NIST).

- Começar pelos sistemas prioritários, muitas vezes em **modo híbrido** (clássico + pós-quântico) durante a transição.
- Atualizar bibliotecas e configurar algoritmos, de preferência centralizando o uso da criptografia.
- Cobrar e acompanhar o roteiro dos fornecedores, com cláusulas contratuais quando necessário.
- Aproveitar para ganhar **agilidade criptográfica**, para que a próxima troca seja mais simples.

**Entrega para a diretoria:** percentual de sistemas prioritários migrados, trimestre a trimestre.

## Fase 4 · Validar e manter

**Objetivo:** garantir que a migração funcionou e continua funcionando.

- Testes de compatibilidade e desempenho.
- Verificação de que algoritmos vulneráveis foram de fato desativados, e não apenas complementados.
- Inventário mantido atualizado, com critério pós-quântico em toda nova compra.

**Entrega para a diretoria:** confirmação de conformidade com a política de criptografia e um indicador permanente de algoritmos vulneráveis em uso.

## Quanto tempo leva

Depende do tamanho e da complexidade do ambiente. Como referência, o NCSC britânico propõe concluir descoberta e planejamento até 2028, a migração das prioridades até 2031 e a transição completa até 2035 — calendário alinhado ao rascunho do NIST, que prevê depreciar os algoritmos vulneráveis por volta de 2030.

## O impacto para o negócio

Um roteiro em fases transforma um risco difuso em projeto com orçamento, marcos e responsáveis. E dilui o custo ao longo de vários anos, em vez de concentrá-lo em uma corrida de última hora.

**Próximo passo:** se a empresa ainda não começou a Fase 1, o primeiro marco é simples: nomear um responsável e iniciar o inventário de criptografia.

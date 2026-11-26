---
title: "Plano de resposta: quem fala com quem nas primeiras 24 horas"
summary: "Nas primeiras horas de um incidente, a confusão custa mais que o ataque. Um plano bom define papéis, canais e decisões antes que a crise comece — e é testado com a diretoria."
pillar: p3
readTime: 7
order: 12
cover: cat-servicos-gerenciados
boardQuestion: "Se um incidente grave acontecesse esta noite, quem decidiria — e quem falaria com clientes, reguladores e imprensa amanhã de manhã?"
sources:
  - label: "Resolução CD/ANPD nº 15/2024 — Regulamento de Comunicação de Incidente de Segurança"
  - label: "Lei nº 13.709/2018 — Lei Geral de Proteção de Dados (LGPD), art. 48"
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
  - label: "NIST SP 800-61 — Computer Security Incident Handling Guide"
    url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
---

São 23h40 de uma sexta-feira. O plantão de TI percebe que vários servidores estão inacessíveis e que arquivos começaram a ganhar uma extensão estranha. Nos minutos seguintes, alguém precisa decidir se desliga sistemas, quem avisa a diretoria, se a operação de sábado será suspensa e o que dizer ao cliente que ligar às sete da manhã.

Se essas decisões forem improvisadas, o incidente cresce. Se estiverem escritas e ensaiadas, a empresa ganha horas preciosas.

## O que um plano de resposta precisa definir

**1. Quem decide.** Um comitê de crise com nomes, substitutos e telefones — fora dos sistemas que podem estar comprometidos. Normalmente reúne CEO ou COO, tecnologia, segurança, jurídico, comunicação e, quando houver, o encarregado de dados (DPO).

**2. Quando acionar.** Critérios claros de severidade: o que é um evento rotineiro, o que é um incidente e o que é uma crise que exige a diretoria.

**3. Como conter.** Ações técnicas previamente autorizadas: isolar equipamentos, bloquear contas, desligar conexões externas, preservar evidências.

**4. Quem fala com quem.** O mapa de comunicação — interno e externo — com mensagens-modelo prontas.

**5. Como recuperar.** A ordem de retomada dos sistemas, baseada no que é mais crítico para o negócio.

## O mapa de comunicação das primeiras 24 horas

| Público | Quem fala | Quando | Cuidado principal |
|---|---|---|---|
| Diretoria e conselho | Líder do comitê de crise | Imediatamente | Fatos conhecidos, decisões necessárias, próxima atualização |
| Colaboradores | Comunicação interna | Nas primeiras horas | O que fazer e o que não fazer; não comentar externamente |
| Clientes afetados | Comercial ou atendimento, com roteiro aprovado | Assim que houver informação confiável | Clareza, sem especulação |
| Seguradora | Jurídico ou financeiro | Conforme a apólice — muitas exigem aviso rápido | Seguir o procedimento da apólice antes de contratar terceiros |
| ANPD e titulares | DPO e jurídico | Prazo regulatório | Avaliar se há risco ou dano relevante a titulares |
| Banco Central e outros reguladores | Compliance | Conforme a norma do setor | Prazos e formatos próprios |
| Imprensa | Porta-voz único | Só com mensagem aprovada | Uma voz, sem versões conflitantes |
| Autoridades policiais | Jurídico | Conforme orientação | Preservação de evidências |

## O prazo regulatório que muitos desconhecem

Quando o incidente envolve dados pessoais e pode acarretar risco ou dano relevante aos titulares, a LGPD exige a comunicação à Autoridade Nacional de Proteção de Dados e aos titulares. O regulamento da ANPD, publicado em 2024, estabelece o prazo de **três dias úteis** a partir do conhecimento do incidente, com informações mínimas definidas. Três dias passam muito rápido no meio de uma crise.

## Teste: o que separa plano de documento

Um plano que nunca foi testado é só documento. O teste mais eficiente para a diretoria é o **exercício de mesa** (*tabletop*): duas a três horas, um cenário realista apresentado em etapas e as pessoas reais tomando decisões, sem tocar em sistemas.

Os exercícios sempre revelam algo: um telefone desatualizado, uma decisão que ninguém sabia de quem era, uma dependência de um sistema que estaria fora do ar. Cada achado é uma correção barata — feita antes da crise de verdade.

## Erros mais comuns

- O plano está guardado no servidor que foi criptografado;
- Ninguém sabe se pode desligar um sistema crítico sem autorização;
- Cada diretor dá uma versão diferente ao mercado;
- A seguradora é avisada tarde, e a cobertura fica comprometida;
- Evidências são apagadas na pressa de restaurar.

## O impacto para o negócio

Empresas que respondem bem a incidentes não são as que nunca foram atacadas. São as que decidiram antes, ensaiaram e falaram com uma só voz. Isso reduz o tempo de paralisação, o risco regulatório e o dano à reputação.

**Próximo passo:** verifique a data do último teste do plano de resposta com a diretoria. Se passou de um ano — ou se nunca aconteceu —, agende um exercício de mesa.

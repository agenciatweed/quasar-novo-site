---
title: "Camada 6 · Operações e resiliência: o que acontece quando o incidente chega"
summary: "Nenhuma defesa é perfeita. A última camada do mapa responde à pergunta que mais importa para o conselho: quanto tempo levamos para perceber, conter e voltar a operar?"
pillar: p4
readTime: 7
order: 17.6
cover: cat-servicos-gerenciados
series: fora-para-dentro
episode: 6
boardQuestion: "Se os sistemas parassem agora, em quantas horas voltaríamos a faturar — e esse número foi testado ou é uma estimativa?"
sources:
  - label: "NIST SP 800-61 Rev. 3 — Incident Response Recommendations and Considerations"
    url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
  - label: "Resolução CD/ANPD nº 15/2024 — Regulamento de Comunicação de Incidente de Segurança"
    url: "https://www.gov.br/anpd/"
  - label: "CISA — #StopRansomware Guide"
    url: "https://www.cisa.gov/stopransomware"
---

Chegamos ao último episódio da série. As cinco camadas anteriores reduzem a chance de um incidente. A sexta parte de uma premissa realista: em algum momento, algo vai passar. A diferença entre um susto e uma crise está no que acontece a seguir.

## O que esta camada protege

A **continuidade das operações** e a **capacidade de recuperação** depois de um incidente — além das evidências de que a empresa agiu corretamente, que serão pedidas por reguladores, clientes, seguradoras e, eventualmente, pela Justiça.

## O tempo é a variável que mais pesa

Em incidentes graves, dois intervalos definem o tamanho do prejuízo: o tempo até **detectar** e o tempo até **recuperar**. Ataques costumam ser lançados fora do horário comercial, em feriados e fins de semana — justamente quando não há ninguém olhando.

E o relógio regulatório também corre: no Brasil, o regulamento da ANPD sobre comunicação de incidentes, de 2024, prevê prazo de três dias úteis para comunicar incidentes que possam acarretar risco ou dano relevante aos titulares de dados.

## O risco que ela reduz

- **Paralisação prolongada** por ransomware, com receita parada a cada hora;
- **Perda definitiva de dados**, quando os backups também são atingidos;
- **Ausência de evidências** para responder a reguladores, clientes e seguradoras;
- **Comunicação desastrosa** nas primeiras horas, que transforma um incidente técnico em crise de reputação.

## Os controles que fazem diferença

**1. Monitoramento e resposta 24x7 (SOC/MDR).** Uma equipe — interna ou contratada — que observa os sinais o tempo todo e tem autonomia para conter um ataque em minutos: isolar uma máquina, bloquear uma conta, cortar uma conexão.

**2. Planos de resposta a incidentes e crise.** Quem decide, quem fala com clientes, reguladores e imprensa, quem aciona jurídico e seguradora. O plano precisa caber em poucas páginas e ser conhecido pela diretoria, não só pela TI.

**3. Resiliência e cópias imutáveis.** Backups isolados, que não podem ser apagados nem criptografados por quem invadiu a rede — com credenciais e acessos separados do ambiente principal.

**4. Testes periódicos de recuperação.** Restaurar de verdade os sistemas críticos, cronometrar e comparar com o tempo que o negócio tolera. Backup que nunca foi restaurado é uma esperança, não um plano.

## Sinais de alerta para a diretoria

- O monitoramento funciona em horário comercial.
- O plano de resposta existe, mas a diretoria nunca participou de um exercício.
- Os backups ficam na mesma rede e usam as mesmas credenciais administrativas.
- Ninguém sabe dizer quanto tempo levaria para restaurar o ERP.

## As perguntas para levar à próxima reunião

- Quem está monitorando o nosso ambiente às três da manhã de um domingo?
- Testamos o plano de resposta com a diretoria no último ano?
- Em quantas horas restauramos os sistemas críticos — e quando testamos isso pela última vez?

## O fim da série — e o começo do trabalho

As seis camadas não são um cardápio: são um sistema. Uma falha de governança deixa a rede sem segmentação; uma identidade sem controle anula a segmentação; um backup sem isolamento anula todo o resto. Por isso a Quasar avalia as seis juntas, de fora para dentro, e a AMSi Networks sustenta os controles em cada uma delas.

## O impacto para o negócio

Resiliência é o que a diretoria compra quando investe em segurança: a garantia de que um incidente terá duração, custo e consequências limitados. É também o que clientes, seguradoras e reguladores querem ver comprovado.

**Próximo passo:** reveja a série desde a introdução, “Por dentro do mapa”, ou leve as seis camadas para uma conversa de 60 minutos no Diagnóstico Executivo.

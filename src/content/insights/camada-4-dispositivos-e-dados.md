---
title: "Camada 4 · Dispositivos e dados: proteger o que o atacante quer levar"
summary: "No fim, quase todo ataque é sobre dados: copiá-los, sequestrá-los ou destruí-los. A quarta camada protege a informação onde ela vive — nos servidores, nas estações e, agora, no que é colado em ferramentas de IA."
pillar: p4
readTime: 6
order: 17.4
cover: home-solucoes
series: fora-para-dentro
episode: 4
boardQuestion: "Sabemos onde estão os nossos dados mais sensíveis — e o que aconteceria se fossem publicados amanhã?"
sources:
  - label: "IBM — Cost of a Data Breach Report 2025"
    url: "https://www.ibm.com/reports/data-breach"
  - label: "LGPD — Lei nº 13.709/2018, art. 46 (medidas de segurança)"
    url: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
  - label: "NIST — Post-Quantum Cryptography (FIPS 203, 204 e 205)"
    url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
---

Nos três primeiros episódios, tratamos de decisão, rede e identidades. Todas essas camadas existem, no fundo, para proteger o que está aqui: os dados da empresa e os equipamentos onde eles são criados, guardados e usados.

## O que esta camada protege

**Dados sensíveis de clientes e do negócio**, **propriedade intelectual**, **servidores e estações de trabalho**. Contratos, bases de clientes, projetos, planilhas de preços, código-fonte, dados pessoais protegidos pela LGPD.

## O risco que ela reduz

- **Vazamento de dados**, por ataque, erro ou uso indevido — inclusive pelo caminho mais novo: informações coladas em ferramentas de IA sem controle;
- **Sequestro de informações** por ransomware, que hoje combina criptografar os dados com ameaçar publicá-los;
- **Perda de sigilo de longo prazo**, quando dados copiados hoje podem ser decifrados no futuro.

A LGPD, no artigo 46, exige que os agentes de tratamento adotem medidas de segurança aptas a proteger os dados pessoais. Em caso de incidente, a primeira pergunta do regulador costuma ser justamente essa: quais medidas existiam?

## Os controles que fazem diferença

**1. Criptografia em repouso e em trânsito.** Dados sensíveis cifrados nos servidores, nas estações, nos backups e nas conexões. É também nesta camada que começa a prontidão pós-quântica: saber onde e como a criptografia é usada é o primeiro passo para migrá-la aos novos padrões publicados pelo NIST em 2024.

**2. Prevenção contra vazamento de dados (DLP).** Ferramentas e regras que identificam informação sensível saindo por e-mail, nuvem pessoal, dispositivos removíveis ou ferramentas de IA.

**3. Proteção avançada de endpoints e servidores.** Soluções de detecção e resposta (EDR) que vão além do antivírus tradicional: identificam comportamento suspeito e permitem isolar uma máquina em segundos.

**4. Governança do uso de IA corporativa.** Regras claras sobre o que pode e o que não pode ser colado em ferramentas de IA, e ferramentas aprovadas que não usam os dados da empresa para treinar modelos.

## Sinais de alerta para a diretoria

- Ninguém sabe dizer onde estão todas as cópias da base de clientes.
- Notebooks de executivos não têm o disco criptografado.
- O uso de ferramentas de IA generativa não tem regra — ou é proibido, mas acontece mesmo assim.

## As perguntas para levar à próxima reunião

- Quais são os nossos dados mais sensíveis, onde estão e quem tem acesso?
- O que acontece se um notebook da diretoria for roubado hoje?
- Temos política e ferramenta aprovada para uso de IA generativa?

## O impacto para o negócio

Proteger dados é proteger receita, contratos e reputação. E é a camada que mais se conecta às obrigações legais: quando um incidente acontece, a capacidade de demonstrar que os dados estavam protegidos muda a conversa com clientes e reguladores.

**Próximo passo:** no episódio 5, olhamos a empresa como um atacante a vê de fora: vulnerabilidades e exposição.

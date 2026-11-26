---
title: "Inventário de criptografia: o primeiro passo que quase ninguém deu"
summary: "Não dá para migrar o que não se conhece. Antes de falar em algoritmos pós-quânticos, a empresa precisa saber onde usa criptografia, de que tipo e sob responsabilidade de quem."
pillar: p2
readTime: 6
order: 8
cover: raiox-hero
boardQuestion: "Se o fornecedor de um sistema crítico anunciasse hoje que vai trocar seus algoritmos de criptografia, saberíamos quais processos de negócio seriam afetados?"
sources:
  - label: "CISA, NSA e NIST — Quantum-Readiness: Migration to Post-Quantum Cryptography (2023)"
  - label: "NIST IR 8547 — Transition to Post-Quantum Cryptography Standards"
    url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
  - label: "CycloneDX — especificação de Cryptography Bill of Materials (CBOM)"
    url: "https://cyclonedx.org/capabilities/cbom/"
---

Pergunte a uma diretoria quantas aplicações a empresa tem e, com algum esforço, alguém chega a um número. Pergunte onde a empresa usa criptografia, com quais algoritmos e com que tamanho de chave, e o silêncio costuma ser longo.

Não é descuido. A criptografia está embutida em quase tudo — e, justamente por isso, quase ninguém a vê.

## Por que o inventário vem primeiro

A transição para a criptografia pós-quântica é, antes de tudo, um projeto de mapeamento. As agências americanas CISA, NSA e NIST, em sua orientação conjunta de 2023 sobre prontidão quântica, colocam o inventário criptográfico como o primeiro passo recomendado às organizações.

Sem ele, não há como estimar esforço, priorizar sistemas, negociar com fornecedores ou montar um cronograma realista.

## Onde a criptografia se esconde

Um inventário completo costuma encontrar criptografia em lugares que ninguém listaria de cabeça:

- **Comunicação:** sites, APIs, VPNs, e-mail, conexões entre sistemas e com parceiros;
- **Identidade:** certificados digitais, autenticação, assinaturas de documentos, tokens;
- **Dados armazenados:** bancos de dados, backups, discos, arquivos;
- **Software:** bibliotecas de código, componentes de terceiros, assinaturas de atualizações;
- **Dispositivos:** equipamentos industriais, terminais de pagamento, sensores e aparelhos com vida útil longa;
- **Fornecedores e nuvem:** serviços SaaS, provedores de nuvem e parceiros que tratam dados da empresa.

## O que registrar

Para cada uso de criptografia, o inventário deve responder a algumas perguntas simples:

- Qual sistema ou processo de negócio depende dele?
- Que algoritmo e que tamanho de chave são usados?
- Quem é o responsável — a empresa ou um fornecedor?
- Que dados ele protege, e por quanto tempo esses dados precisam continuar secretos?
- É possível trocar o algoritmo sem reconstruir o sistema?

Esse registro estruturado tem nome: **CBOM**, do inglês *Cryptography Bill of Materials* — uma lista de materiais criptográficos, nos moldes da lista de componentes de software. Existem especificações abertas, como a do projeto CycloneDX, para padronizar esse registro.

## Como fazer, na prática

**1. Comece pelo que é crítico.** Não é preciso mapear tudo no primeiro mês. Comece pelos sistemas que sustentam receita, dados de clientes e operações essenciais.

**2. Combine ferramentas e entrevistas.** Ferramentas de varredura encontram certificados, protocolos e bibliotecas. Entrevistas com donos de sistemas revelam o que as ferramentas não enxergam, como integrações antigas e equipamentos específicos.

**3. Inclua os fornecedores.** Pergunte formalmente aos fornecedores críticos qual é o plano deles para a criptografia pós-quântica. A resposta — ou a falta dela — é informação valiosa.

**4. Cruze com a classificação de dados.** O inventário ganha força quando cada uso de criptografia está ligado à vida útil dos dados que protege.

**5. Mantenha vivo.** O inventário não é um documento de gaveta. Novos sistemas e contratos devem entrar nele desde o início.

## Um efeito colateral positivo

Empresas que fazem o inventário costumam descobrir problemas que nada têm a ver com computação quântica: certificados prestes a expirar, protocolos antigos ainda ativos, chaves sem dono, algoritmos já considerados fracos. Só esses achados costumam justificar o esforço.

## O impacto para o negócio

O inventário transforma um risco abstrato em uma lista de decisões concretas, com dono e prazo. É também o documento que mostra a reguladores, auditores e clientes que a empresa está tratando o tema com diligência.

**Próximo passo:** escolha os cinco sistemas mais críticos da empresa e faça, para cada um, as perguntas desta página. É um começo que cabe em uma semana.

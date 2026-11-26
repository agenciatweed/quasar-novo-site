---
title: "Pós-quântico em 5 perguntas: o guia para quem decide"
summary: "O que é, por que importa agora, o que já existe, quanto tempo leva e por onde começar. O essencial sobre o risco quântico, sem fórmula e sem alarme."
pillar: p2
readTime: 6
order: 41
cover: home-solucoes
boardQuestion: "Alguém na empresa é responsável, hoje, por acompanhar a transição para a criptografia pós-quântica?"
sources:
  - label: "NIST — FIPS 203, 204 e 205: primeiros padrões de criptografia pós-quântica (agosto de 2024)"
    url: "https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards"
  - label: "NIST IR 8547 (rascunho) — Transition to Post-Quantum Cryptography Standards"
    url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
  - label: "NCSC (Reino Unido) — Timelines for migration to post-quantum cryptography"
    url: "https://www.ncsc.gov.uk/guidance/pqc-migration-timelines"
---

“Computação quântica” costuma aparecer cercada de exagero: ou como ameaça iminente que vai quebrar tudo amanhã, ou como ficção científica distante. Nenhuma das duas versões ajuda a decidir. Este guia responde, em linguagem de negócio, às cinco perguntas que mais ouvimos de conselhos e diretorias.

## 1. O que é o risco quântico, em uma frase?

Computadores quânticos suficientemente grandes conseguiriam quebrar a criptografia de chave pública usada hoje para proteger quase tudo — conexões seguras, assinaturas digitais, certificados, VPNs. Os algoritmos mais afetados são o **RSA** e os baseados em **curvas elípticas**.

Esses computadores ainda não existem na escala necessária. Mas a pergunta relevante não é “quando eles chegam?”, e sim a próxima.

## 2. Por que isso importa agora, se o computador ainda não existe?

Por dois motivos.

**Colher agora, decifrar depois.** Dados criptografados podem ser copiados hoje e guardados até que seja possível abri-los. Para informações que precisam continuar secretas por muitos anos — contratos de longo prazo, patentes, dados de saúde, estratégias, dados de clientes —, o risco já começou.

**Migrar leva anos.** Trocar a criptografia de uma empresa envolve sistemas próprios, fornecedores, equipamentos, certificados e parceiros. Experiências anteriores de troca de algoritmos mostram que esse tipo de transição costuma levar muitos anos.

## 3. Já existe solução?

Sim. Em agosto de 2024, o NIST, instituto de padrões dos Estados Unidos e referência mundial no tema, publicou os três primeiros padrões de criptografia pós-quântica: **FIPS 203** (ML-KEM, para estabelecer chaves), **FIPS 204** (ML-DSA) e **FIPS 205** (SLH-DSA), ambos para assinaturas digitais. Em 2025, o NIST selecionou ainda um algoritmo adicional de reserva, o HQC.

Esses padrões funcionam em computadores comuns. Não é preciso ter um computador quântico para se proteger de um.

## 4. Qual é o prazo?

O NIST publicou, em rascunho, um roteiro que prevê **depreciar** os algoritmos vulneráveis por volta de **2030** e **proibi-los** a partir de **2035**. O centro nacional de cibersegurança do Reino Unido (NCSC) trabalha com marcos semelhantes: descoberta e planejamento até 2028, migração prioritária até 2031 e conclusão até 2035.

Para quem tem dados de longa vida, o prazo efetivo é anterior: o dado precisa estar protegido antes de ser copiado.

## 5. Por onde começar?

Não pela compra de tecnologia. Os primeiros passos são de gestão:

1. **Nomear um responsável** pelo tema.
2. **Identificar os dados de longa vida** — o que precisa continuar secreto por 10 anos ou mais.
3. **Fazer o inventário de criptografia** — onde e como a empresa usa criptografia, inclusive em fornecedores.
4. **Perguntar aos fornecedores** qual é o roteiro deles para os novos padrões.
5. **Desenhar o plano de migração** por prioridade, começando pelo que protege dados de longa vida.

## O impacto para o negócio

O risco quântico é um raro caso em que a empresa sabe, com anos de antecedência, que uma tecnologia essencial vai precisar ser trocada. Quem começa pelo inventário transforma uma possível corrida de última hora em um projeto planejado, com custo diluído e sem interrupção.

**Próximo passo:** comece pela pergunta mais simples — quais dados da sua empresa precisam continuar secretos por 10 anos ou mais?

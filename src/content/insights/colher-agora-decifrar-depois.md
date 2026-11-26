---
title: "“Colher agora, decifrar depois”: por que o risco quântico já começou"
summary: "Computadores quânticos capazes de quebrar a criptografia atual ainda não existem. Mas os dados que vão abrir talvez já estejam sendo copiados hoje. É por isso que o assunto é de agora."
pillar: p2
readTime: 6
order: 7
cover: cover-p2
featured: true
boardQuestion: "Quais dados da empresa precisam continuar secretos por 10 anos ou mais — e eles estão protegidos contra quem os copiar hoje?"
sources:
  - label: "NIST — FIPS 203, 204 e 205: primeiros padrões de criptografia pós-quântica (agosto de 2024)"
    url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
  - label: "NIST IR 8547 — Transition to Post-Quantum Cryptography Standards"
    url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
  - label: "CISA, NSA e NIST — Quantum-Readiness: Migration to Post-Quantum Cryptography (2023)"
  - label: "Michele Mosca — Cybersecurity in an era with quantum computers: will we be ready? (IEEE Security & Privacy, 2018)"
---

Quase toda a comunicação segura da sua empresa — o acesso ao internet banking, a VPN, o certificado do site, a assinatura de documentos — depende de algoritmos de criptografia como RSA e curvas elípticas. Eles são seguros hoje porque os computadores atuais levariam um tempo impraticável para quebrá-los.

Um computador quântico suficientemente grande e estável muda essa conta. Ele ainda não existe. Mas o risco já começou.

## O que significa “colher agora, decifrar depois”

A expressão traduz uma estratégia conhecida em inglês como *harvest now, decrypt later*. Funciona assim:

- **Hoje**, um atacante intercepta e guarda comunicações e arquivos criptografados. Ele não consegue lê-los — e não precisa.
- **Amanhã**, quando houver capacidade quântica suficiente, esses dados podem ser decifrados.

Para quem coleta, guardar é barato. O que importa é o valor que a informação ainda terá quando puder ser aberta.

## Nem todo dado está em risco — mas alguns estão muito

O risco depende de quanto tempo cada informação precisa continuar secreta. A previsão de vendas do trimestre perde valor em meses. Mas há dados com vida útil longa:

- contratos e acordos de longo prazo;
- patentes, fórmulas, projetos e propriedade intelectual;
- dados pessoais e de saúde de clientes;
- estratégias de fusões e aquisições;
- segredos de Estado e informações de infraestrutura crítica.

Se esses dados forem copiados hoje e decifrados daqui a alguns anos, o dano acontece no futuro — mas a falha de proteção aconteceu agora.

## A conta que a diretoria precisa fazer

O pesquisador Michele Mosca propôs uma regra simples, que virou referência no tema. Considere três números:

- **X** — quantos anos os seus dados precisam continuar secretos;
- **Y** — quantos anos a empresa vai levar para migrar para criptografia resistente a computadores quânticos;
- **Z** — em quantos anos um computador quântico relevante pode existir.

Se **X + Y for maior que Z**, a empresa já está atrasada. Como migrar criptografia em sistemas grandes leva anos, e como dados sensíveis costumam ter vida longa, a conta raramente é confortável.

## Os padrões já existem

Em agosto de 2024, o NIST, instituto de padrões dos Estados Unidos, publicou os três primeiros padrões de criptografia pós-quântica: **FIPS 203** (ML-KEM, para troca de chaves), **FIPS 204** (ML-DSA) e **FIPS 205** (SLH-DSA), ambos para assinaturas digitais. Em 2025, selecionou um algoritmo adicional de reserva para troca de chaves.

O roteiro de transição do NIST, o documento **IR 8547**, prevê **depreciar** RSA e curvas elípticas após **2030** e **proibi-los** após **2035** nos sistemas sob sua orientação. Fornecedores de tecnologia no mundo inteiro seguem esse calendário.

> O prazo de 2030 parece distante. Para quem tem dados que precisam durar dez anos, ele já começou.

## O que fazer agora

A boa notícia é que o primeiro passo não exige nenhuma tecnologia nova:

1. **Inventário de criptografia.** Descobrir onde e como a empresa usa criptografia — em sistemas próprios, em fornecedores e na nuvem.
2. **Classificação dos dados por vida útil.** Identificar o que precisa continuar secreto por 10 anos ou mais.
3. **Priorização.** Cruzar as duas listas e definir o que migrar primeiro.
4. **Cripto-agilidade.** Exigir de fornecedores e de projetos novos a capacidade de trocar algoritmos sem reconstruir sistemas.
5. **Roadmap.** Um plano de migração, com marcos, alinhado ao calendário de 2030 e 2035.

## O impacto para o negócio

O risco quântico não é ficção científica nem urgência fabricada: é um problema de prazo. Empresas que começam agora migram com calma, junto com os ciclos naturais de renovação de tecnologia. As que esperam vão migrar com pressa — e mais caro.

**Próximo passo:** responda à pergunta do conselho abaixo. Se ninguém souber listar os dados de longa vida, o inventário é o lugar para começar.

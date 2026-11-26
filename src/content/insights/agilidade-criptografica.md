---
title: "Agilidade criptográfica: preparar a empresa para trocar de algoritmo sem parar"
summary: "A transição pós-quântica não será a última troca de criptografia. Empresas que tornam essa troca simples hoje economizam na próxima — e em todas as seguintes."
pillar: p2
readTime: 5
order: 42
cover: cover-p4
boardQuestion: "Se precisássemos trocar um algoritmo de criptografia em todos os nossos sistemas, saberíamos em quanto tempo e a que custo?"
sources:
  - label: "NIST CSWP 39 — Considerations for Achieving Cryptographic Agility"
  - label: "NIST — Post-Quantum Cryptography"
    url: "https://csrc.nist.gov/projects/post-quantum-cryptography"
---

Toda criptografia tem prazo de validade. Algoritmos que já foram padrão, como o DES e o SHA-1, precisaram ser substituídos quando ficaram fracos demais — e cada substituição revelou o mesmo problema: a criptografia estava espalhada, embutida e esquecida em centenas de lugares.

A transição para a criptografia pós-quântica vai repetir esse desafio em escala maior. Por isso, além de migrar, vale aproveitar para resolver a causa: a falta de **agilidade criptográfica**.

## O que é agilidade criptográfica

É a capacidade de **trocar algoritmos, tamanhos de chave e bibliotecas de criptografia com rapidez e baixo custo**, sem reescrever sistemas nem parar a operação. O NIST dedicou um documento ao tema, que trata a agilidade como requisito de projeto, não como ajuste posterior.

Na prática, uma empresa com agilidade criptográfica:

- **Sabe onde usa criptografia** — tem inventário atualizado;
- **Centraliza** o uso em poucas bibliotecas e serviços, em vez de cada sistema implementar o seu;
- **Configura**, em vez de programar: o algoritmo é um parâmetro, não uma linha de código fixa;
- **Gerencia certificados e chaves** de forma automatizada, com validade e renovação controladas;
- **Exige agilidade dos fornecedores**, nos contratos e nas avaliações.

## Por que isso interessa à diretoria

Porque transforma uma série de projetos caros e urgentes em uma capacidade permanente. Sem agilidade, cada troca de algoritmo vira um projeto de anos, com risco de interrupção. Com agilidade, vira uma mudança de configuração planejada.

Há também um ganho imediato: a mesma disciplina que facilita a migração pós-quântica reduz incidentes comuns, como **certificados vencidos** que derrubam sites e sistemas — um problema operacional frequente e totalmente evitável.

## A transição em modo híbrido

Durante a migração, muitas implementações vão usar **modos híbridos**: combinações de um algoritmo clássico com um pós-quântico, de forma que a conexão continue segura mesmo que um dos dois venha a falhar. Navegadores e serviços de grande porte já adotaram esse modelo em conexões seguras. Só é possível operar assim com bibliotecas atualizadas e configuração flexível — ou seja, com agilidade.

## Por onde começar

1. **Inventário de criptografia**, incluindo certificados, chaves, bibliotecas e protocolos.
2. **Política de criptografia** que defina algoritmos aprovados e prazos de substituição.
3. **Gestão automatizada de certificados**, com alertas e renovação.
4. **Critério de agilidade nas compras**: novos sistemas e fornecedores precisam suportar troca de algoritmo e ter roteiro para os padrões pós-quânticos.

## O impacto para o negócio

Agilidade criptográfica é investimento que se paga mais de uma vez: na migração pós-quântica, na próxima troca de algoritmo e em cada incidente de certificado vencido que deixa de acontecer.

**Próximo passo:** pergunte à área de tecnologia quantas bibliotecas e serviços de criptografia diferentes a empresa usa hoje. A resposta diz muito sobre o tamanho da migração.

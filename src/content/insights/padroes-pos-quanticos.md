---
title: "Os padrões pós-quânticos já existem — o que isso muda para a sua empresa"
summary: "Em agosto de 2024, o NIST publicou os primeiros padrões de criptografia resistente a computadores quânticos. A discussão saiu do “se” e foi para o “quando” — e para o “como”."
pillar: p2
readTime: 6
order: 9
cover: cover-p5
boardQuestion: "Nossos contratos de tecnologia exigem que fornecedores críticos sigam o calendário de transição pós-quântica?"
sources:
  - label: "NIST — FIPS 203 (ML-KEM)"
    url: "https://csrc.nist.gov/pubs/fips/203/final"
  - label: "NIST — FIPS 204 (ML-DSA)"
    url: "https://csrc.nist.gov/pubs/fips/204/final"
  - label: "NIST — FIPS 205 (SLH-DSA)"
    url: "https://csrc.nist.gov/pubs/fips/205/final"
  - label: "NIST IR 8547 — Transition to Post-Quantum Cryptography Standards"
    url: "https://csrc.nist.gov/pubs/ir/8547/ipd"
  - label: "Finsiders — Banco Central estuda regulação para IA e criptografia quântica"
    url: "https://finsidersbrasil.com.br/tecnologia-para-fintechs/bc-estuda-regulacao-para-ia-e-criptografia-quantica/"
---

Durante quase uma década, o NIST — o instituto de padrões e tecnologia dos Estados Unidos — conduziu uma competição internacional para escolher algoritmos de criptografia capazes de resistir a computadores quânticos. Em agosto de 2024, o processo chegou ao primeiro resultado concreto.

## O que foi publicado

Três padrões oficiais, conhecidos pela sigla FIPS:

| Padrão | Algoritmo | Para que serve |
|---|---|---|
| **FIPS 203** | ML-KEM | Estabelecer chaves secretas entre duas partes — a base de conexões seguras como as de sites e VPNs |
| **FIPS 204** | ML-DSA | Assinaturas digitais de uso geral |
| **FIPS 205** | SLH-DSA | Assinaturas digitais com uma base matemática diferente, como alternativa de segurança |

Em 2025, o NIST também selecionou um algoritmo adicional para troca de chaves, como reserva caso uma fragilidade seja encontrada no principal. E há um quarto padrão de assinatura em preparação.

Um detalhe curioso: o texto lateral que acompanha as peças da Quasar — `ML-KEM-768` — se refere justamente a um dos níveis de segurança do FIPS 203.

## O calendário que importa

Junto com os padrões, o NIST publicou o roteiro **IR 8547**, que orienta a transição. A linha mestra é clara:

- **Após 2030**, os algoritmos atuais mais usados — RSA e curvas elípticas — passam a ser **depreciados** nos níveis de segurança mais comuns;
- **Após 2035**, ficam **proibidos** nos sistemas que seguem a orientação do instituto.

Mesmo para empresas fora dos Estados Unidos, esse calendário tem efeito prático: os grandes fabricantes de software, navegadores, sistemas operacionais e serviços de nuvem trabalham com ele. Quem compra tecnologia vai receber a transição — preparado ou não.

## O que muda na prática

**1. A discussão deixa de ser teórica.** Com padrões publicados, não há mais motivo para esperar “a definição do mercado”. Ela existe.

**2. Fornecedores começam a migrar.** Navegadores e grandes provedores já adotaram formas híbridas de troca de chaves, que combinam o algoritmo tradicional com o pós-quântico. Parte da proteção chega por atualização — mas só para quem mantém os sistemas atualizados.

**3. O gargalo passa a ser interno.** Sistemas legados, integrações antigas, equipamentos de vida útil longa e código próprio não migram sozinhos. É aí que mora o esforço.

**4. Contratos precisam mudar.** Faz sentido incluir nos contratos de tecnologia exigências de cripto-agilidade e de aderência ao calendário de transição.

**5. Reguladores estão atentos.** No Brasil, o Banco Central incluiu a criptografia quântica entre os temas em estudo em sua agenda de 2026. Setores regulados devem esperar perguntas sobre o assunto.

## Híbrido: a ponte da transição

Durante a transição, a recomendação mais comum é usar esquemas **híbridos**: a conexão é protegida ao mesmo tempo pelo algoritmo tradicional e pelo pós-quântico. Se um deles falhar, o outro segura. É uma forma prudente de ganhar proteção contra o “colher agora, decifrar depois” sem abandonar o que já é testado.

## O que a diretoria deve pedir

- Um **inventário de criptografia** dos sistemas críticos;
- A lista dos **dados que precisam continuar secretos** por 10 anos ou mais;
- Um **roadmap de migração** com marcos até 2030;
- A **posição dos fornecedores críticos** sobre o tema;
- Um **dono** para o programa.

## O impacto para o negócio

Os padrões tornaram a transição pós-quântica um projeto com começo, meio e prazo. Para a empresa, a escolha não é se vai migrar, mas se vai migrar de forma planejada, aproveitando ciclos naturais de renovação, ou às pressas, quando um fornecedor ou regulador exigir.

**Próximo passo:** peça ao time de tecnologia um primeiro mapa dos sistemas que dependem de RSA e curvas elípticas. É o ponto de partida do roadmap.

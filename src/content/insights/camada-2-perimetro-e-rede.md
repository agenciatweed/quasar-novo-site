---
title: "Camada 2 · Perímetro e rede: impedir que uma porta aberta vire a casa inteira"
summary: "O perímetro deixou de ser um muro em volta do escritório. Com nuvem, filiais e trabalho remoto, a pergunta passou a ser outra: se alguém entrar, até onde consegue ir?"
pillar: p4
readTime: 6
order: 17.2
cover: sobre-presenca
series: fora-para-dentro
episode: 2
boardQuestion: "Se um computador de uma filial for comprometido hoje, o atacante conseguiria alcançar os sistemas financeiros da matriz?"
sources:
  - label: "NIST SP 800-207 — Zero Trust Architecture"
    url: "https://csrc.nist.gov/pubs/sp/800/207/final"
  - label: "CISA — Zero Trust Maturity Model"
    url: "https://www.cisa.gov/zero-trust-maturity-model"
  - label: "Mapa de controles de cibersegurança em 6 camadas — AMSi Networks"
---

No primeiro episódio da série, falamos de quem decide. Agora vamos para o lugar por onde a maior parte dos ataques tenta entrar: a borda da rede — e o que existe logo atrás dela.

## O que esta camada protege

As **conexões entre matriz, filiais, ambientes em nuvem e acessos externos**: o trabalho remoto, os fornecedores que acessam sistemas, as integrações com parceiros. É a infraestrutura que liga tudo — e que, mal desenhada, liga também o atacante a tudo.

## A mudança de lógica: de muro para compartimentos

Durante anos, a segurança de rede foi pensada como um castelo: muralha forte por fora, confiança total por dentro. O problema é que, uma vez dentro, o invasor também ganha essa confiança.

A abordagem moderna, conhecida como **Zero Trust** (confiança zero), parte de outro princípio: nenhum acesso é confiável só porque vem “de dentro”. Cada conexão é verificada, e a rede é dividida em compartimentos, como os de um navio — se um alaga, os outros continuam secos. A publicação SP 800-207 do NIST, de 2020, é a referência mais usada para essa arquitetura.

## O risco que ela reduz

- **Invasão direta pela internet**, por serviços expostos sem necessidade;
- **Movimentação lateral**: o atacante entra por um ponto fraco (uma estação, um sistema esquecido) e caminha livremente até os sistemas críticos;
- **Paralisação em cadeia**: um ransomware que se espalha da filial para a matriz porque nada os separava.

## Os controles que fazem diferença

**1. Segmentação da rede corporativa.** Separar o que é crítico (financeiro, produção, backups) do restante, com regras explícitas sobre quem pode falar com quem.

**2. Arquitetura Zero Trust de perímetro.** Acesso remoto que verifica identidade, dispositivo e contexto a cada conexão — em vez de uma VPN que abre a rede inteira.

**3. Proteção de conectividade e borda.** Firewalls e proteção dos pontos de entrada bem configurados, com regras revisadas — regra antiga “temporária” costuma ser porta aberta permanente.

**4. Controle do tráfego leste-oeste.** Monitorar e limitar a comunicação *entre* sistemas internos, não só a que entra e sai. É nesse tráfego que a movimentação lateral aparece.

## Sinais de alerta para a diretoria

- “A rede é uma só” é a resposta quando alguém pergunta como a filial se conecta à matriz.
- Fornecedores acessam o ambiente com a mesma VPN e as mesmas permissões há anos.
- Ninguém sabe dizer quais serviços da empresa estão acessíveis pela internet.

## As perguntas para levar à próxima reunião

- Nossos sistemas críticos estão separados do restante da rede?
- Como fornecedores e colaboradores remotos acessam o ambiente — e o que conseguem alcançar?
- Detectaríamos um invasor caminhando entre sistemas internos?

## O impacto para o negócio

Segmentação é o que separa um incidente contido de uma paralisação total. Quando a rede é compartimentada, um computador comprometido continua sendo um problema de um computador — não da empresa inteira.

**Próximo passo:** no episódio 3, entramos na camada que atacantes mais procuram: identidades e acessos privilegiados.

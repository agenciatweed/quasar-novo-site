---
title: "Case anônimo: a lacuna que costuma aparecer numa empresa “bem protegida”"
summary: "Ferramentas modernas, equipe dedicada, auditoria em dia — e uma porta aberta que ninguém via. Um cenário ilustrativo, construído a partir de padrões frequentes, sobre por que a visão por camadas importa."
pillar: p5
readTime: 6
order: 23
boardQuestion: "Quando foi a última vez que alguém de fora olhou para a nossa segurança tentando encontrar o que não sabemos?"
sources:
  - label: "Verizon — Data Breach Investigations Report (DBIR)"
    url: "https://www.verizon.com/business/resources/reports/dbir/"
  - label: "IBM — Cost of a Data Breach Report 2025 (Brasil: comprometimento de terceiros com o maior custo médio)"
    url: "https://www.prnewswire.com/br/comunicados-para-a-imprensa/relatorio-da-ibm-custo-medio-de-uma-violacao-de-dados-no-brasil-atinge-r-7-19-milhoes-302517777.html"
review: "Cenário ilustrativo. Substituir por um case anônimo real, autorizado por escrito pelo cliente, quando houver."
---

> **Cenário ilustrativo.** A empresa descrita abaixo não existe. O cenário foi composto a partir de padrões frequentes em avaliações de segurança e não descreve nenhum cliente da Quasar. Pela nossa regra, nenhum cliente é citado sem autorização por escrito, e nenhuma vulnerabilidade de empresa identificável é exposta.

## A empresa

Imagine uma empresa de serviços com cerca de 1.500 colaboradores, presença em várias cidades e um time de tecnologia competente. Ela tem proteção moderna nos computadores, firewall de última geração, autenticação multifator no e-mail e uma auditoria anual sem apontamentos graves. A diretoria considera a empresa “bem protegida” — e, em muitos aspectos, ela é.

## O que um olhar por camadas encontraria

Quando a avaliação percorre as seis camadas, de fora para dentro, o quadro muda.

**Camada 5 — exposição.** Um mapeamento externo encontra um sistema antigo de atendimento, criado para um projeto encerrado anos antes, ainda acessível pela internet. Ninguém lembrava que ele existia. Ele não aparecia no inventário e, por isso, não recebia atualizações.

**Camada 3 — identidades.** Esse sistema autentica usuários com uma conta de serviço que tem privilégios amplos na rede interna — e que não está protegida por autenticação multifator, porque “é uma conta técnica”.

**Camada 2 — rede.** Não há segmentação entre o servidor desse sistema e o restante do ambiente. Quem estivesse nele conseguiria alcançar praticamente tudo.

**Camada 6 — recuperação.** Os backups existem e são diários, mas ficam acessíveis pela mesma rede, com credenciais administrativas comuns. O último teste completo de restauração aconteceu há mais de um ano.

Isoladas, cada uma dessas falhas parece moderada. Combinadas, desenham um caminho completo: da internet ao controle da rede e à destruição dos backups.

## Por que ninguém via

- **As ferramentas olhavam para o que era conhecido.** O sistema esquecido estava fora do inventário — e, portanto, fora de tudo.
- **Cada área enxergava a sua parte.** Infraestrutura, aplicações e backup tinham donos diferentes, e ninguém olhava o caminho inteiro.
- **A auditoria verificava controles declarados**, não tentava encontrar o que não estava declarado.
- **A conta técnica era tratada como exceção** — e exceções costumam ser a porta de entrada.

Esse padrão é coerente com o que relatórios internacionais registram há anos: credenciais comprometidas, vulnerabilidades não corrigidas e terceiros estão entre os caminhos mais comuns dos incidentes graves.

## As três prioridades que sairiam do diagnóstico

1. **Descobrir e eliminar o que está exposto e esquecido**, com mapeamento contínuo da superfície de ataque.
2. **Colocar contas técnicas e privilegiadas sob controle**, com autenticação forte, menor privilégio e monitoramento.
3. **Isolar os backups e testar a restauração** dos sistemas críticos, com prazos aprovados pela diretoria.

Nenhuma delas exigiria uma ferramenta nova de grande porte. Todas exigiriam visão de conjunto.

## A lição

“Bem protegida” é uma avaliação que só vale quando alguém tentou, deliberadamente, provar o contrário. Segurança não falha onde a empresa investiu — falha no espaço entre os investimentos.

## O impacto para o negócio

Um caminho como esse, se encontrado por um atacante antes da empresa, poderia resultar em paralisação, vazamento e recuperação lenta — com custo muito superior ao de qualquer diagnóstico.

**Próximo passo:** o Diagnóstico Executivo da Quasar percorre as seis camadas em 60 minutos com a diretoria e aponta as três prioridades para agir.

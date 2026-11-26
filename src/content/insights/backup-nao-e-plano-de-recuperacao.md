---
title: "Backup não é plano de recuperação"
summary: "Ter cópias de segurança é diferente de conseguir voltar a operar. Em ataques de ransomware, os backups costumam ser os primeiros alvos. Só vale o que foi isolado — e restaurado com sucesso."
pillar: p4
readTime: 6
order: 19
cover: cover-p4
boardQuestion: "Quando foi a última vez que restauramos, de verdade, um sistema crítico a partir do backup — e quanto tempo levou?"
sources:
  - label: "NIST SP 800-34 — Contingency Planning Guide for Federal Information Systems"
    url: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
  - label: "ISO 22301 — Sistemas de gestão de continuidade de negócios"
  - label: "CISA — #StopRansomware Guide"
    url: "https://www.cisa.gov/stopransomware"
---

“Temos backup de tudo.” É uma das frases mais repetidas em reuniões sobre segurança — e uma das mais perigosas. Ela costuma vir acompanhada de uma suposição que só é testada no pior momento: a de que, se algo der errado, basta restaurar.

## Por que o backup falha quando mais se precisa

**Os backups são alvo.** Em ataques de ransomware, os criminosos procuram e destroem ou criptografam as cópias de segurança antes de atacar os sistemas principais. Se o backup estiver acessível pela mesma rede e com as mesmas credenciais, ele cai junto.

**A restauração nunca foi testada.** Cópias corrompidas, incompletas ou em formatos que ninguém sabe mais restaurar só aparecem quando alguém tenta usá-las.

**O tempo de recuperação é desconhecido.** Restaurar terabytes de dados pode levar dias. Se a operação só suporta horas parada, o backup existe, mas não resolve.

**A ordem não está definida.** Sistemas dependem uns dos outros. Sem saber o que restaurar primeiro, a recuperação vira tentativa e erro.

## Dois números que a diretoria precisa conhecer

- **RTO — tempo de recuperação.** Em quanto tempo cada sistema crítico precisa voltar a funcionar? É uma decisão de negócio, não técnica.
- **RPO — ponto de recuperação.** Quanto de dado a empresa aceita perder? Uma hora? Um dia? Isso define a frequência dos backups.

Quando esses números não estão definidos e aprovados, a área de tecnologia trabalha com suposições — e a diretoria descobre a realidade durante a crise.

## A regra prática das cópias

Uma referência muito usada no mercado é a regra **3-2-1-1-0**:

- **3** cópias dos dados;
- em **2** tipos de mídia diferentes;
- **1** cópia fora do ambiente principal;
- **1** cópia offline ou imutável, que não pode ser alterada nem apagada;
- **0** erros na verificação de restauração.

A cópia imutável ou offline é a que salva a empresa no cenário de ransomware. O “zero erros” é o que garante que ela funciona.

## Backup é peça; recuperação é plano

Um plano de recuperação de desastres vai além das cópias. Ele define:

1. os sistemas críticos e a ordem de restauração;
2. os RTOs e RPOs aprovados pela diretoria;
3. as pessoas responsáveis e seus substitutos;
4. os ambientes alternativos, se o principal estiver comprometido;
5. como verificar que os dados restaurados estão íntegros e livres do atacante;
6. a comunicação com clientes e parceiros durante a retomada.

Ele se conecta ao plano de continuidade de negócios — como a empresa continua operando, ainda que de forma reduzida, enquanto os sistemas não voltam.

## Teste: a única prova que vale

Testes de restauração devem acontecer com regularidade, começando pelos sistemas mais críticos. O resultado esperado não é “o backup existe”, mas “restauramos o sistema X em Y horas, com perda de Z horas de dados”. Exercícios de crise com a diretoria complementam o teste técnico.

## O impacto para o negócio

A diferença entre uma empresa que se recupera de um ransomware em dias e outra que fica semanas parada raramente está na sofisticação do ataque. Está no backup isolado, no plano escrito e no teste feito antes.

**Próximo passo:** peça ao time de tecnologia a data e o resultado do último teste de restauração de cada sistema crítico. Se não houver resposta, o risco de paralisação prolongada é real.

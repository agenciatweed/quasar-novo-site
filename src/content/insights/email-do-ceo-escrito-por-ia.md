---
title: "O e-mail do “CEO” pedindo pagamento urgente, agora escrito por IA"
summary: "A fraude do e-mail corporativo é antiga. O que mudou é a qualidade: sem erros, no tom certo e com contexto real. A defesa continua sendo processo — mais algumas camadas técnicas."
pillar: p1
readTime: 5
order: 5
cover: home-hero
boardQuestion: "Se amanhã um fornecedor pedir, por e-mail, a troca da conta bancária de pagamento, quantas pessoas precisam confirmar antes de o dinheiro sair?"
sources:
  - label: "FBI — Internet Crime Complaint Center (IC3), relatórios anuais sobre Business Email Compromise"
    url: "https://www.ic3.gov/"
  - label: "IBM — Cost of a Data Breach Report 2025 (Brasil: phishing como principal vetor)"
    url: "https://www.prnewswire.com/br/comunicados-para-a-imprensa/relatorio-da-ibm-custo-medio-de-uma-violacao-de-dados-no-brasil-atinge-r-7-19-milhoes-302517777.html"
  - label: "DMARC.org — padrão de autenticação de e-mail (SPF, DKIM e DMARC)"
    url: "https://dmarc.org/"
---

Durante anos, o conselho para identificar e-mails fraudulentos foi o mesmo: desconfie de erros de português, de saudações genéricas e de pedidos estranhos. A Inteligência Artificial tornou esse conselho obsoleto.

Hoje, o e-mail do “CEO” pedindo um pagamento urgente chega bem escrito, no tom habitual do executivo, citando um projeto real e assinado corretamente.

## Um golpe antigo, com acabamento novo

A fraude conhecida como *Business Email Compromise* (BEC), ou comprometimento de e-mail corporativo, está há anos entre as que mais causam prejuízo no mundo, segundo os relatórios anuais do IC3, o centro de denúncias de crimes digitais do FBI. As perdas declaradas somam bilhões de dólares por ano.

No Brasil, o relatório da IBM de 2025 apontou o phishing como o principal vetor inicial das violações de dados, presente em 18% dos casos.

As variações mais comuns são:

- **O falso executivo**, que pede uma transferência confidencial e urgente;
- **O falso fornecedor**, que avisa da “mudança de conta bancária” para os próximos pagamentos;
- **O falso advogado**, que fala em nome do CEO sobre uma operação sigilosa;
- **O falso RH**, que pede dados de funcionários ou altera a conta de salário de alguém.

## O que a IA acrescenta

Com modelos de linguagem, o criminoso consegue imitar o estilo de escrita de um executivo a partir de textos públicos, produzir mensagens sem erros em qualquer idioma, personalizar cada e-mail para cada vítima e responder com naturalidade quando o alvo faz perguntas. Combinada com uma conta de e-mail real comprometida, a fraude fica praticamente indistinguível de uma mensagem legítima.

## Camadas de defesa

**1. Processo antes de tudo.** Nenhuma alteração de dados bancários de fornecedor é feita com base apenas em e-mail. A confirmação acontece por telefone, com um contato já cadastrado, e é registrada. Pagamentos fora do fluxo exigem dupla aprovação.

**2. Autenticação do domínio.** Configurar corretamente os padrões **SPF, DKIM e DMARC** dificulta que criminosos enviem e-mails se passando pelo domínio da empresa. É uma medida técnica de baixo custo que muitas organizações ainda não completaram.

**3. Alerta de remetente externo.** Marcar visualmente as mensagens vindas de fora da empresa ajuda a perceber quando o “CEO” está escrevendo de um endereço externo.

**4. Proteção das contas.** Autenticação multifator em todos os e-mails corporativos reduz o risco de uma conta legítima ser invadida e usada no golpe — a versão mais perigosa da fraude.

**5. Monitoramento de regras suspeitas.** Atacantes que invadem uma caixa costumam criar regras para esconder respostas. Detectar essas regras é um sinal precoce de comprometimento.

**6. Treinamento com exemplos atuais.** Simulações com e-mails bem escritos, contextualizados e urgentes preparam melhor do que exemplos caricatos.

## O que dizer aos times

Uma frase resume a orientação: **pedido urgente de dinheiro ou de dados, por qualquer canal, se confirma por outro canal.** Sem exceção para cargos, e sem punição para quem verifica.

## O impacto para o negócio

Uma única fraude bem-sucedida pode desviar valores relevantes, gerar disputa com bancos e fornecedores e expor falhas de controle interno a auditores. A defesa custa pouco: um processo claro, configurações de e-mail bem feitas e treinamento recorrente.

**Próximo passo:** verifique com o time de TI se SPF, DKIM e DMARC estão configurados em modo de proteção e se o financeiro tem um procedimento escrito para troca de dados bancários.

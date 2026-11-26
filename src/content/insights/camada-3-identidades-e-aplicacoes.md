---
title: "Camada 3 · Identidades e aplicações: a senha do diretor vale mais que o firewall"
summary: "Por que invadir quando é possível entrar com uma credencial válida? A camada de identidades protege quem acessa o quê, com que privilégio e por quanto tempo — e os sistemas onde o negócio acontece."
pillar: p4
readTime: 6
order: 17.3
cover: cover-p1
series: fora-para-dentro
episode: 3
boardQuestion: "Quantas pessoas, hoje, têm acesso de administrador aos nossos sistemas críticos — e quem revisou essa lista pela última vez?"
sources:
  - label: "Verizon — Data Breach Investigations Report (DBIR)"
    url: "https://www.verizon.com/business/resources/reports/dbir/"
  - label: "CISA — Implementing Phishing-Resistant MFA"
    url: "https://www.cisa.gov/resources-tools/resources/implementing-phishing-resistant-mfa"
  - label: "OWASP — API Security Top 10"
    url: "https://owasp.org/API-Security/"
---

No episódio anterior, compartimentamos a rede. Mas um atacante com a credencial certa não precisa arrombar compartimento algum: ele entra pela porta da frente. É por isso que a terceira camada do mapa é uma das mais decisivas.

## O que esta camada protege

**Credenciais de executivos, acessos privilegiados** (administradores de sistemas, de nuvem, de bancos de dados) e as **aplicações onde o negócio acontece**: ERP, CRM, portais de clientes e as APIs que conectam a empresa a parceiros.

## Por que identidade virou o novo perímetro

Relatórios internacionais, como o DBIR da Verizon, registram há anos o uso de credenciais roubadas ou abusadas entre os caminhos mais comuns dos incidentes. Faz sentido: uma credencial válida não dispara alarmes de invasão, porque, para os sistemas, não houve invasão nenhuma.

A combinação mais perigosa é conhecida: **conta privilegiada + sem autenticação multifator + sem monitoramento**. Ela aparece com frequência em incidentes graves — inclusive em contas “técnicas” que ninguém considera de alto risco.

## O risco que ela reduz

- **Sequestro de contas administrativas**, que dá ao atacante as chaves de tudo;
- **Fraudes** por uso indevido de acessos legítimos, internos ou de fornecedores;
- **Exploração de aplicações** e APIs expostas, por falhas de autenticação ou de autorização.

## Os controles que fazem diferença

**1. Autenticação multifator (MFA) e controle de acesso.** MFA em e-mail, acesso remoto e sistemas críticos — de preferência resistente a phishing, como chaves físicas ou passkeys, que a CISA recomenda para contas de maior risco.

**2. Gestão de identidades privilegiadas.** Acesso de administrador concedido só quando necessário, por tempo limitado, registrado e revisado. Ninguém deveria usar uma conta privilegiada para ler e-mail.

**3. Segurança de aplicações e APIs.** Avaliação das aplicações antes de irem para produção e proteção das APIs, que hoje carregam boa parte dos dados de negócio.

**4. Governança de acessos em nuvem.** Ambientes em nuvem acumulam permissões rapidamente. Revisão periódica de quem pode o quê evita que um único acesso esquecido exponha um banco de dados inteiro.

## Sinais de alerta para a diretoria

- Ex-colaboradores e ex-fornecedores ainda aparecem nas listas de acesso.
- Existem contas “compartilhadas” de administrador, com senha conhecida por várias pessoas.
- MFA está ativo no e-mail, mas não no acesso remoto ou nos sistemas financeiros.

## As perguntas para levar à próxima reunião

- O MFA está ativo para todos os acessos críticos — inclusive os da diretoria?
- Como controlamos e revisamos os acessos privilegiados?
- Em quanto tempo um acesso é removido quando alguém sai da empresa?

## O impacto para o negócio

Controlar identidades é a forma mais direta de reduzir o risco de fraude e de incidentes graves com baixo custo relativo. Boa parte dos controles desta camada não exige tecnologia nova — exige disciplina, dono e revisão.

**Próximo passo:** no episódio 4, chegamos ao que o atacante realmente quer levar: os dados — e os dispositivos onde eles vivem.

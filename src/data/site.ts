// Conteúdo estrutural do site v3.
// Fontes: v3/Quasar.html (estrutura e textos de serviço, camadas e insights)
// e v3/Quasar-Technology-guia-completo.md (posicionamento, públicos, pilares, artes e jornada).

export const brand = {
  name: 'Quasar Technology',
  idea: 'Enquanto outros reagem, a Quasar antecipa.',
  signature: 'Segurança antecipada. Decisão no topo.',
  complement: 'Segurança para a era da IA e da computação quântica — decidida no conselho, não só na TI.',
  mother:
    'A Quasar une ciência aplicada, IA e criptografia de nova geração para antecipar ameaças. Com a AMSi Networks, transforma isso em proteção concreta em cada camada da empresa, explicada na língua de quem decide.',
  mission: 'Converter ciência aplicada em segurança que antecipa ameaças e sustenta decisões críticas.',
  hexSide: '0x51 0x55 0x41 0x53 0x41 0x52 · ML-KEM-768 · AES-256-GCM',
  statusSide: '// quasar-sec · status: antecipando',
};

export const contacts = {
  people: [
    { name: 'Jorge Muzy', email: 'muzy@quasar.ia.br' },
    { name: 'André Silva', email: 'andre@quasar.ia.br' },
  ],
  linkedin: 'https://www.linkedin.com/company/quasar-ia',
  instagram: 'https://www.instagram.com/quasar.ia.br',
  site: 'https://quasar.ia.br',
};

export type CatKey = 'consultoria' | 'servicos-gerenciados';
export const categories: Record<CatKey, { title: string; short: string; lead: string; icon: string }> = {
  consultoria: {
    title: 'Consultoria Estratégica',
    short: 'Consultoria',
    lead: 'Diagnóstico executivo, governança, adequação regulatória (LGPD/ANPD, Banco Central, ISO 27001), segurança para Inteligência Artificial, prontidão pós-quântica e arquitetura de continuidade.',
    icon: 'compass',
  },
  'servicos-gerenciados': {
    title: 'Serviços Gerenciados (MSSP)',
    short: 'Serviços Gerenciados',
    lead: 'Monitoramento contínuo 24x7, detecção e resposta a incidentes, gestão ativa de vulnerabilidades e proteção de identidades e dados críticos — sem sobrecarregar sua equipe interna.',
    icon: 'radar',
  },
};

export interface Service {
  slug: string;
  cat: CatKey;
  title: string;
  menu: string;
  short: string;
  tag: string;
  icon: string;
  impact: string;
  methodology: string[];
  capabilities: string[];
  boardQuestions: string[];
  layers: number[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'analise-riscos',
    cat: 'consultoria',
    title: 'Análise e Gestão de Riscos Cibernéticos',
    menu: 'Análise de Riscos Cibernéticos',
    short: 'Mapeamento de ativos críticos e priorização de investimentos alinhados ao apetite a risco do Conselho.',
    tag: 'Decisão Executiva',
    icon: 'gauge',
    impact:
      'Decisões de segurança sem base em risco levam a investimentos desalinhados e expõem a empresa a perdas financeiras evitáveis, interrupções operacionais e questionamentos do Conselho de Administração sobre a diligência dos executivos.',
    methodology: [
      'Mapeamento dos processos críticos de negócio e ativos de informação de maior valor.',
      'Avaliação de ameaças, vulnerabilidades e probabilidade de impacto financeiro e regulatório.',
      'Elaboração de matriz executiva de riscos e plano de tratamento priorizado por retorno e urgência.',
      'Definição de indicadores de risco (KRIs) para acompanhamento periódico pela diretoria.',
    ],
    capabilities: ['Metodologias ISO 27005 / NIST RMF', 'Business Impact Analysis (BIA)', 'Avaliação de Risco de Terceiros', 'Roadmap Executivo de Investimentos'],
    boardQuestions: [
      'Quais são os cinco riscos cibernéticos que mais ameaçam a nossa receita?',
      'Quem é o dono de cada risco e qual é o prazo de tratamento?',
      'O investimento em segurança deste ano reduz quais riscos — e em quanto?',
    ],
    layers: [1],
    related: ['risco-cibernetico-na-matriz-de-riscos', 'cinco-perguntas-ao-ciso', 'seguro-cibernetico'],
  },
  {
    slug: 'iso-27001',
    cat: 'consultoria',
    title: 'ISO 27001 & Frameworks de Segurança',
    menu: 'ISO 27001 & Frameworks',
    short: 'Implementação do SGSI para destravar contratos enterprise e auditorias de fornecedores.',
    tag: 'Certificação & Cadeia de Suprimentos',
    icon: 'badge-check',
    impact:
      'Grandes contratantes no Brasil e no exterior exigem comprovação formal de governança de segurança em suas cadeias de suprimentos. Sem certificação ou alinhamento a frameworks reconhecidos, sua empresa perde competitividade e enfrenta bloqueios comerciais.',
    methodology: [
      'Análise de lacunas (Gap Analysis) frente aos requisitos da norma ISO/IEC 27001 e frameworks aplicáveis.',
      'Estruturação do Sistema de Gestão de Segurança da Informação (SGSI) adequado ao porte da operação.',
      'Implementação e evidenciamento dos controles organizacionais, físicos e tecnológicos.',
      'Acompanhamento de auditoria interna e preparação completa para a auditoria de certificação.',
    ],
    capabilities: ['ISO/IEC 27001:2022', 'NIST Cybersecurity Framework', 'SOC 2 Readiness', 'Gestão de Evidências e Auditoria Interna'],
    boardQuestions: [
      'Quais contratos dependem de comprovarmos governança de segurança?',
      'Nossos controles geram evidência auditável ou existem só no papel?',
      'Quanto tempo levaríamos para responder ao questionário de segurança de um grande cliente?',
    ],
    layers: [1],
    related: ['por-que-6-camadas', 'cinco-perguntas-ao-ciso', 'glossario-sem-sigla'],
  },
  {
    slug: 'lgpd-privacidade',
    cat: 'consultoria',
    title: 'Privacidade & Adequação à LGPD',
    menu: 'Privacidade & LGPD',
    short: 'Governança de dados pessoais para mitigar sanções da ANPD e responder a exigências contratuais.',
    tag: 'Regulatório',
    icon: 'scale',
    impact:
      'O descumprimento da Lei Geral de Proteção de Dados sujeita a organização a sanções administrativas da ANPD previstas no Art. 52 — incluindo multas de até 2% do faturamento no Brasil (limitadas a R$ 50 milhões por infração), publicização da falha e danos severos à confiança de clientes.',
    methodology: [
      'Mapeamento do ciclo de vida e fluxo de dados pessoais (Data Mapping / ROPA) nas áreas de negócio.',
      'Avaliação de bases legais, contratos com operadores e Relatórios de Impacto (RIPD/DPIA).',
      'Definição de políticas de privacidade, gestão de direitos dos titulares e fluxo de resposta a incidentes.',
      'Apoio contínuo ao Encarregado pelo Tratamento de Dados Pessoais (DPO) e capacitação de equipes.',
    ],
    capabilities: ['Adequação LGPD / ANPD', 'Data Mapping & Inventário de Dados', 'RIPD / DPIA', 'Governança de DPO e Resposta a Incidentes'],
    boardQuestions: [
      'Sabemos onde estão os dados pessoais que tratamos — e com que base legal?',
      'Em quantos dias úteis conseguimos comunicar um incidente à ANPD?',
      'Nossos operadores e fornecedores têm obrigações contratuais claras?',
    ],
    layers: [1, 4],
    related: ['lgpd-e-o-conselho', 'plano-de-resposta-primeiras-24-horas', 'o-que-seus-colaboradores-colam-na-ia'],
  },
  {
    slug: 'ia-nuvem',
    cat: 'consultoria',
    title: 'Governança e Segurança para IA & Nuvem',
    menu: 'Segurança para IA & Nuvem',
    short: 'Políticas, arquitetura e controles para adotar IA e nuvem sem vazar dados corporativos.',
    tag: 'Prioridade de Diretoria',
    icon: 'brain-circuit',
    impact:
      'A adoção acelerada de ferramentas de Inteligência Artificial sem governança formal gera risco imediato de vazamento de dados estratégicos, propriedade intelectual e dados pessoais, além de ampliar a superfície de exposição em ambientes em nuvem. Quando a empresa passa a construir os próprios modelos e assistentes, eles também viram alvo: injeção de instruções, extração de dados e abuso de integrações.',
    methodology: [
      'Diagnóstico do uso atual de Inteligência Artificial (incluindo Shadow AI) e da arquitetura em nuvem.',
      'Elaboração de Política Corporativa de Uso Seguro de IA e critérios de governança alinhados ao negócio.',
      'Revisão de arquitetura de nuvem e dos modelos da empresa: proteção de dados, segregação de acessos e controle de prompts e APIs.',
      'Treinamento executivo e operacional para adoção responsável de modelos e automações.',
    ],
    capabilities: ['Governança de IA Corporativa', 'Políticas de Uso Aceitável de IA', 'Segurança de Modelos (OWASP Top 10 para LLM)', 'Arquitetura Segura em Nuvem', 'Prevenção de Vazamento de Dados em IA'],
    boardQuestions: [
      'Que ferramentas de IA nossos times usam hoje — e com quais dados?',
      'Os modelos e assistentes que construímos foram testados contra abuso?',
      'Quem aprova um novo uso de IA antes que ele chegue à produção?',
    ],
    layers: [3, 4],
    related: ['governanca-de-ia-corporativa', 'seguranca-de-modelos-de-ia', 'o-que-seus-colaboradores-colam-na-ia'],
  },
  {
    slug: 'pos-quantico',
    cat: 'consultoria',
    title: 'Prontidão Pós-Quântica',
    menu: 'Prontidão Pós-Quântica',
    short: 'Inventário de criptografia e plano de migração para proteger hoje os dados que precisam continuar secretos amanhã.',
    tag: 'Horizonte 2030',
    icon: 'atom',
    impact:
      'Dados criptografados copiados hoje podem ser abertos amanhã por computadores quânticos — o risco conhecido como “colher agora, decifrar depois”. O NIST publicou em agosto de 2024 os primeiros padrões pós-quânticos (FIPS 203, 204 e 205) e seu roteiro de transição prevê depreciar RSA e curvas elípticas após 2030. Contratos, patentes e dados de clientes com vida útil longa já estão expostos a esse horizonte.',
    methodology: [
      'Inventário de criptografia: onde a empresa usa RSA, curvas elípticas, certificados e chaves — em sistemas próprios, fornecedores e nuvem.',
      'Classificação dos dados pela vida útil do sigilo: o que precisa continuar secreto por 10 anos ou mais.',
      'Priorização por risco e prazo, cruzando tempo de migração, vida útil do dado e horizonte quântico.',
      'Roadmap de migração com cripto-agilidade, esquemas híbridos e exigências contratuais para fornecedores críticos.',
    ],
    capabilities: ['Inventário Criptográfico (CBOM)', 'ML-KEM · ML-DSA · SLH-DSA (FIPS 203/204/205)', 'Criptografia Híbrida e Cripto-agilidade', 'Roadmap de Migração Pós-Quântica'],
    boardQuestions: [
      'Quais dados da empresa precisam continuar secretos por 10 anos ou mais?',
      'Sabemos onde usamos RSA e criptografia de curvas elípticas?',
      'Nossos fornecedores críticos têm plano de migração pós-quântica?',
    ],
    layers: [4, 1],
    related: ['colher-agora-decifrar-depois', 'inventario-de-criptografia', 'padroes-pos-quanticos'],
  },
  {
    slug: 'continuidade-dr',
    cat: 'consultoria',
    title: 'Continuidade de Negócios & Recuperação de Desastres',
    menu: 'Continuidade de Negócios & DR',
    short: 'Planos de recuperação e testes de restauração para a operação não parar diante de ransomware.',
    tag: 'Resiliência Operacional',
    icon: 'life-buoy',
    impact:
      'Em um ataque de ransomware bem-sucedido, cada hora de paralisação representa perda direta de receita, descumprimento de SLAs contratuais e risco existencial quando cópias de segurança não são isoladas ou testadas.',
    methodology: [
      'Definição de objetivos de tempo de recuperação (RTO) e ponto de recuperação (RPO) por sistema crítico.',
      'Estruturação do Plano de Continuidade de Negócios (PCN) e do Plano de Recuperação de Desastres (DRP).',
      'Desenho de arquitetura de cópias de segurança imutáveis e segregadas contra criptografia maliciosa.',
      'Execução de simulados de crise executiva e testes periódicos de restauração.',
    ],
    capabilities: ['Plano de Continuidade de Negócios (PCN)', 'Disaster Recovery Planning (DRP)', 'Arquitetura de Backup Imutável', 'Simulados de Crise (Tabletop Exercises)'],
    boardQuestions: [
      'Quanto custa um dia de operação parada?',
      'Quando foi o último teste real de restauração dos sistemas críticos?',
      'Nossos backups sobreviveriam a um ataque que criptografa a rede inteira?',
    ],
    layers: [6],
    related: ['backup-nao-e-plano-de-recuperacao', 'plano-de-resposta-primeiras-24-horas', 'seguro-cibernetico'],
  },
  {
    slug: 'automacao',
    cat: 'consultoria',
    title: 'Automação de Segurança e Conformidade',
    menu: 'Automação de Segurança',
    short: 'Orquestração de respostas e evidências automáticas para reduzir o tempo entre detecção e contenção.',
    tag: 'Eficiência & Escala',
    icon: 'workflow',
    impact:
      'Processos manuais de verificação de controles e resposta a alertas criam gargalos operacionais, aumentam o erro humano e elevam o custo de manutenção da conformidade em ambientes corporativos complexos.',
    methodology: [
      'Mapeamento de fluxos operacionais repetitivos entre TI, segurança e conformidade.',
      'Desenho de playbooks de resposta automatizada e coleta contínua de evidências de auditoria.',
      'Integração entre monitoramento, gestão de vulnerabilidades e fluxos de aprovação corporativa.',
      'Medição de ganho de eficiência e redução do tempo médio de resposta (MTTR).',
    ],
    capabilities: ['Orquestração e Playbooks de Resposta', 'Automação de Evidências de Compliance', 'Integração de Fluxos Operacionais', 'Métricas Executivas de Eficiência'],
    boardQuestions: [
      'Quanto tempo leva, hoje, entre detectar um alerta e conter a ameaça?',
      'Quantas horas por mês gastamos coletando evidências de auditoria à mão?',
      'Que respostas a incidentes poderiam ser automáticas — e seguras?',
    ],
    layers: [6, 5],
    related: ['ia-na-defesa', 'da-pesquisa-a-protecao', 'glossario-sem-sigla'],
  },
  {
    slug: 'soc-mdr',
    cat: 'servicos-gerenciados',
    title: 'SOC & Resposta a Incidentes (MDR) 24x7',
    menu: 'SOC & Resposta a Incidentes (MDR)',
    short: 'Monitoramento contínuo, caça a ameaças e contenção imediata, 24 horas por dia.',
    tag: 'Operação 24x7',
    icon: 'radar',
    impact:
      'Ameaças modernas operam fora do horário comercial e exploram janelas de minutos para comprometer servidores e paralisar operações. Manter uma equipe interna 24x7 exige investimento elevado e difícil retenção de talentos.',
    methodology: [
      'Monitoramento contínuo 24x7 de endpoints, servidores, nuvem e rede com correlação de eventos.',
      'Investigação especializada e caça proativa a ameaças (Threat Hunting) para identificar comportamentos anômalos.',
      'Contenção imediata de incidentes e isolamento de ativos comprometidos conforme playbooks acordados.',
      'Relatórios executivos mensais de postura, incidentes bloqueados e recomendações de melhoria.',
    ],
    capabilities: ['Monitoramento e Resposta 24x7', 'Detecção e Resposta Gerenciada (MDR)', 'Threat Hunting Proativo', 'Gestão de Crise e Contenção'],
    boardQuestions: [
      'Quem está olhando a nossa operação às 3h da manhã de um domingo?',
      'Em quanto tempo isolamos um equipamento comprometido?',
      'O relatório mensal mostra tendência de risco ou só volume de alertas?',
    ],
    layers: [6],
    related: ['ia-na-defesa', 'plano-de-resposta-primeiras-24-horas', 'glossario-sem-sigla'],
  },
  {
    slug: 'ctem-pentest',
    cat: 'servicos-gerenciados',
    title: 'Gestão Contínua de Exposição (CTEM / Pentest)',
    menu: 'Gestão Contínua de Exposição (CTEM/Pentest)',
    short: 'Descoberta contínua da superfície de ataque, testes independentes e correção priorizada por risco.',
    tag: 'Exposição',
    icon: 'scan-eye',
    impact:
      'Avaliações pontuais realizadas apenas uma vez por ano deixam brechas abertas durante meses. Além disso, regulações como as do Banco Central exigem testes independentes e controle rigoroso de vulnerabilidades.',
    methodology: [
      'Descoberta contínua da superfície de ataque externa e interna da organização.',
      'Execução de testes de intrusão (Pentest) independentes em aplicações, APIs e infraestrutura.',
      'Priorização das vulnerabilidades com base em explorabilidade real e criticidade para o negócio.',
      'Acompanhamento do ciclo de remediação e validação técnica pós-correção.',
    ],
    capabilities: ['CTEM (Continuous Threat Exposure Management)', 'Pentest Externo, Interno e Web/API', 'Gestão Contínua de Vulnerabilidades', 'Validação de Remediação'],
    boardQuestions: [
      'O que temos exposto na internet que ainda não conhecemos?',
      'Quando foi o último teste de intrusão independente?',
      'As falhas críticas são corrigidas em quanto tempo, na prática?',
    ],
    layers: [5],
    related: ['pentest-explicado-para-o-cfo', 'case-a-lacuna-na-empresa-bem-protegida', 'resolucoes-cmn-bcb'],
  },
  {
    slug: 'protecao-dados',
    cat: 'servicos-gerenciados',
    title: 'Proteção de Dados & Resiliência Gerenciada',
    menu: 'Proteção de Dados & Resiliência',
    short: 'DLP, criptografia e verificação contínua de backups, com relatórios de prontidão para a diretoria.',
    tag: 'Dados Críticos',
    icon: 'database',
    impact:
      'O vazamento de informações confidenciais ou a perda de integridade de backups compromete diretamente a continuidade operacional, gera passivos jurídicos sob a LGPD e destrói a confiança do mercado.',
    methodology: [
      'Classificação e monitoramento contínuo do trânsito de dados sensíveis e corporativos.',
      'Aplicação gerenciada de políticas de prevenção a vazamentos (DLP) e criptografia.',
      'Gestão e verificação contínua de rotinas de backup e integridade para recuperação.',
      'Relatórios periódicos de conformidade e prontidão de restauração para a diretoria.',
    ],
    capabilities: ['Prevenção de Vazamento de Dados (DLP)', 'Gestão de Criptografia Corporativa', 'Monitoramento de Resiliência de Backup', 'Auditoria de Acesso a Dados Sensíveis'],
    boardQuestions: [
      'Onde estão os nossos dados mais sensíveis — e quem os acessa?',
      'Conseguiríamos provar que um dado não saiu da empresa?',
      'Os backups são verificados ou apenas executados?',
    ],
    layers: [4, 6],
    related: ['dados-secretos-por-10-anos', 'o-que-seus-colaboradores-colam-na-ia', 'backup-nao-e-plano-de-recuperacao'],
  },
  {
    slug: 'identidade-nuvem',
    cat: 'servicos-gerenciados',
    title: 'Identidade & Segurança em Nuvem Corporativa',
    menu: 'Identidade & Nuvem Corporativa',
    short: 'Proteção de identidades, acessos privilegiados e postura em nuvem, com resposta a anomalias.',
    tag: 'Identidades',
    icon: 'fingerprint',
    impact:
      'Credenciais comprometidas e configurações inadequadas em nuvem são hoje os principais vetores de acesso inicial em incidentes graves, permitindo que atacantes assumam privilégios administrativos sem disparar alertas tradicionais.',
    methodology: [
      'Monitoramento contínuo de posturas de segurança em nuvem e detecção de desvios de configuração.',
      'Proteção e auditoria contínua de identidades corporativas, acessos privilegiados e sessões.',
      'Aplicação do princípio de menor privilégio e resposta rápida a anomalias de autenticação.',
      'Governança contínua para ambientes multicloud e aplicações corporativas SaaS.',
    ],
    capabilities: ['Gestão de Postura em Nuvem', 'Proteção de Identidades e Acessos Privilegiados', 'Detecção de Anomalias de Autenticação', 'Governança Multicloud e SaaS'],
    boardQuestions: [
      'Todos os acessos administrativos exigem autenticação multifator?',
      'Quantas contas privilegiadas temos — e quem as revisa?',
      'Detectaríamos um login legítimo sendo usado por um atacante?',
    ],
    layers: [3, 2],
    related: ['deepfake-do-ceo', 'email-do-ceo-escrito-por-ia', 'glossario-sem-sigla'],
  },
];

export const servicesBy = (cat: CatKey) => services.filter((s) => s.cat === cat);
export const serviceHref = (s: Pick<Service, 'cat' | 'slug'>) => `/${s.cat}/${s.slug}/`;

// Mapa de 6 camadas — base de execução com a AMSi Networks
export const layers = [
  {
    id: 1, num: '01', icon: 'landmark',
    title: 'Governança, Risco e Compliance (GRC)',
    subtitle: 'Políticas, Compliance, Treinamento e Gestão de Riscos',
    protects: 'Decisões do Conselho, conformidade regulatória (LGPD/ANPD, Banco Central, ISO 27001) e responsabilidade civil dos administradores.',
    risk: 'Exposição a multas regulatórias, reprovação em auditorias de clientes corporativos e ausência de diretrizes formais de segurança.',
    controls: ['Políticas Corporativas (Policies)', 'Conformidade Regulatória (Compliance)', 'Programa de Conscientização (Training)', 'Matriz de Riscos Executiva'],
  },
  {
    id: 2, num: '02', icon: 'network',
    title: 'Perímetro e Arquitetura de Rede',
    subtitle: 'Segmentação, Controle de Borda e Acesso Remoto Seguro',
    protects: 'Interconexões entre matriz, filiais, ambientes em nuvem e acessos externos corporativos.',
    risk: 'Invasões diretas pela internet, movimentação lateral irrestrita e comprometimento de redes corporativas críticas.',
    controls: ['Segmentação de Rede Corporativa', 'Arquitetura Zero Trust de Perímetro', 'Proteção de Conectividade e Borda', 'Controle de Tráfego Leste-Oeste'],
  },
  {
    id: 3, num: '03', icon: 'key-round',
    title: 'Acesso, Identidades e Aplicações',
    subtitle: 'Gestão de Identidades, Privilégios e Aplicações Corporativas',
    protects: 'Credenciais executivas, acessos privilegiados, sistemas ERP/CRM, portais e APIs de negócio.',
    risk: 'Sequestro de contas administrativas, fraudes internas ou externas e exploração de aplicações críticas.',
    controls: ['Autenticação Multifator e Controle de Acesso', 'Gestão de Identidades Privilegiadas', 'Segurança de Aplicações e APIs', 'Governança de Acessos em Nuvem'],
  },
  {
    id: 4, num: '04', icon: 'hard-drive',
    title: 'Dispositivos, Endpoints e Dados',
    subtitle: 'Criptografia, Proteção de Dados e Segurança de Estações',
    protects: 'Dados sensíveis de clientes e negócios, propriedade intelectual, servidores e estações de trabalho.',
    risk: 'Vazamento de dados corporativos (incluindo via ferramentas de IA), sequestro de informações e perda de sigilo.',
    controls: ['Criptografia de Dados em Repouso e Trânsito', 'Prevenção contra Vazamento de Dados (DLP)', 'Proteção Avançada de Endpoints e Servidores', 'Governança de Uso de IA Corporativa'],
  },
  {
    id: 5, num: '05', icon: 'scan-eye',
    title: 'Gestão de Vulnerabilidades e Exposição',
    subtitle: 'Avaliação Contínua, Pentest e Priorização por Risco',
    protects: 'Superfície de ataque externa e interna contra falhas exploráveis antes que sejam usadas por atacantes.',
    risk: 'Exploração de brechas conhecidas, falhas em sistemas expostos e não conformidade com testes exigidos por reguladores.',
    controls: ['Gestão Contínua de Vulnerabilidades', 'Testes de Intrusão (Pentest) Independentes', 'Gestão Contínua de Exposição (CTEM)', 'Priorização de Correções por Impacto'],
  },
  {
    id: 6, num: '06', icon: 'activity',
    title: 'Operações de Segurança e Resiliência (24x7)',
    subtitle: 'Monitoramento Contínuo, Resposta a Incidentes e Recuperação',
    protects: 'Disponibilidade ininterrupta das operações de negócio e capacidade de recuperação rápida após incidentes.',
    risk: 'Paralisação prolongada por ransomware, perda definitiva de dados e ausência de evidências para resposta regulatória.',
    controls: ['Monitoramento e Resposta 24x7 (SOC/MDR)', 'Planos de Resposta a Incidentes e Crise', 'Resiliência Cibernética e Cópias Imutáveis', 'Testes Periódicos de Recuperação (DR)'],
  },
];

// Seção 02 do guia — "Nossas soluções" (carrossel de 6 cards)
export const solutions = [
  {
    title: 'IA aplicada à defesa',
    text: 'Antecipar, detectar e responder em tempo real: monitoramento 24x7 com correlação de eventos e caça proativa a ameaças.',
    icon: 'bot', href: '/servicos-gerenciados/soc-mdr/', img: 'sol-ia-defesa',
  },
  {
    title: 'Segurança de modelos de IA',
    text: 'Os modelos, assistentes e integrações de IA da empresa protegidos contra injeção de instruções, vazamento e abuso.',
    icon: 'brain-circuit', href: '/consultoria/ia-nuvem/', img: 'sol-modelos-ia',
  },
  {
    title: 'Prontidão pós-quântica',
    text: 'Proteger hoje os dados que precisam continuar secretos amanhã: inventário de criptografia e plano de migração.',
    icon: 'atom', href: '/consultoria/pos-quantico/', img: 'sol-pos-quantico',
  },
  {
    title: 'Arquiteturas resilientes',
    text: 'A defesa organizada em 6 camadas, da governança à operação 24x7, com execução da AMSi Networks.',
    icon: 'layers', href: '/metodologia/', img: 'sol-arquiteturas',
  },
  {
    title: 'Governança e risco',
    text: 'Risco cibernético na língua do conselho: impacto, prioridade, dono e prazo — com LGPD, Banco Central e ISO 27001.',
    icon: 'landmark', href: '/consultoria/analise-riscos/', img: 'sol-governanca',
  },
  {
    title: 'Diagnóstico Executivo',
    text: '60 minutos com a diretoria, 6 camadas avaliadas e 3 prioridades para agir. O primeiro passo, sem compromisso.',
    icon: 'target', href: '/diagnostico-executivo/', img: 'sol-diagnostico',
  },
];

// Linhas editoriais (pilares de conteúdo do guia)
export const pillars = [
  { key: 'p1', code: 'P1', name: 'IA no ataque e na defesa', short: 'IA no ataque e na defesa', desc: 'Deepfakes de executivos, fraudes com IA, segurança de modelos e uso de IA generativa.', icon: 'bot' },
  { key: 'p2', code: 'P2', name: 'Pós-quântico sem mistério', short: 'Pós-quântico', desc: '“Colher agora, decifrar depois”, inventário de criptografia, padrões pós-quânticos e migração.', icon: 'atom' },
  { key: 'p3', code: 'P3', name: 'Ciber no conselho', short: 'Ciber no conselho', desc: 'Governança, risco, resposta a incidentes, LGPD, Banco Central e seguro cibernético.', icon: 'landmark' },
  { key: 'p4', code: 'P4', name: 'As 6 camadas na prática', short: '6 camadas', desc: 'O mapa de controles com a AMSi, execução e prioridades — camada por camada.', icon: 'layers' },
  { key: 'p5', code: 'P5', name: 'Ciência aplicada e bastidor', short: 'Ciência e bastidor', desc: 'Fundadores, pesquisa, metodologia e aprendizados de campo.', icon: 'orbit' },
] as const;
export type PillarKey = (typeof pillars)[number]['key'];
export const pillarBy = (k: string) => pillars.find((p) => p.key === k)!;

// "Frentes de atuação" do HTML — portfólio orientado a risco
export const fronts = ['lgpd-privacidade', 'iso-27001', 'ia-nuvem', 'continuidade-dr', 'analise-riscos', 'automacao'];

export const heroStats = [
  { label: 'Conformidade', value: 'LGPD, BACEN & ISO 27001', icon: 'scale' },
  { label: 'Operação', value: 'Monitoramento 24x7', icon: 'activity' },
  { label: 'Presença', value: 'Brasil, Canadá & EUA', icon: 'globe' },
];

export const differentials = [
  { title: 'IA na defesa', text: 'Antecipar, detectar e responder em tempo real.', icon: 'bot' },
  { title: 'Prontidão pós-quântica', text: 'Proteger hoje os dados que precisam continuar secretos amanhã.', icon: 'atom' },
  { title: 'Visão integrada das 6 camadas', text: 'Da governança à operação 24x7, com execução da AMSi Networks.', icon: 'layers' },
  { title: 'Linguagem de conselho', text: 'Risco, impacto, prioridade e prazo — sem sigla sem tradução.', icon: 'landmark' },
];

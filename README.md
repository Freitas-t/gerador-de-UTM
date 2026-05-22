# Gerador de UTM

Sistema de automação para geração padronizada de URLs UTM utilizando Google Sheets + Google Apps Script.

O projeto foi desenvolvido com foco em:
- padronização operacional;
- redução de erros humanos;
- escalabilidade;
- organização de campanhas;
- velocidade operacional;
- rastreabilidade de campanhas de marketing.

---

# Visão Geral

O sistema permite gerar UTMs diretamente dentro do Google Sheets através de:
- menu personalizado;
- sidebar interativa;
- validações automáticas;
- normalização de texto;
- integração com bases dinâmicas;
- registro automático de resultados.

---

# Objetivo do Projeto

Automatizar o processo de criação de URLs rastreáveis utilizadas em:
- campanhas de marketing;
- mídia paga;
- social media;
- CRM;
- e-mail marketing;
- campanhas institucionais;
- tráfego orgânico;
- campanhas internas.

---

# Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| Google Sheets | Interface operacional |
| Google Apps Script | Backend da automação |
| HTML | Sidebar/interface |
| JavaScript | Regras de negócio |
| Git | Versionamento |
| GitHub | Repositório |
| VS Code / Cursor | Desenvolvimento local |

---

# Estrutura do Projeto

```txt id="u4b7xz"
gerador-utm/
│
├─ README.md
│
├─ docs/
│  ├─ estrutura-planilha.md
│  ├─ instalacao-cliente.md
│  └─ regras-de-negocio.md
│
├─ src/
│  ├─ Menu.gs
│  ├─ Sidebar.html
│  ├─ sidebar.gs
│  ├─ utm_generator.gs
│  ├─ text_utils.gs
│  ├─ sheet_service.gs
│  ├─ base_service.gs
│  └─ ambienteDeTestes.gs
│
├─ samples/
│  └─ modelo-planilha.xlsx
│
├─ .gitignore
│
└─ LICENSE
```

---

# Arquitetura do Sistema

O projeto foi estruturado utilizando separação de responsabilidades.

Cada arquivo possui uma função específica dentro do sistema.

---

# Estrutura Técnica

## `Menu.gs`

Responsável por:
- criação do menu personalizado;
- inicialização do sistema;
- abertura da sidebar.

---

## `Sidebar.html`

Responsável pela interface visual.

Contém:
- formulário;
- campos;
- botões;
- estrutura visual da automação.

---

## `sidebar.gs`

Responsável pela comunicação entre:
- frontend;
- backend Apps Script.

---

## `utm_generator.gs`

Camada principal de regras de negócio.

Responsável por:
- geração das UTMs;
- concatenação dos parâmetros;
- montagem da URL final.

---

## `text_utils.gs`

Responsável por:
- normalização;
- remoção de acentos;
- tratamento de strings;
- padronização textual.

---

## `sheet_service.gs`

Responsável pelas operações da planilha:
- leitura;
- escrita;
- ranges;
- manipulação de abas.

---

## `base_service.gs`

Responsável por:
- carregamento de bases;
- listas auxiliares;
- dados dinâmicos;
- dropdowns.

---

## `ambienteDeTestes.gs`

Ambiente utilizado para:
- testes;
- homologações;
- validações;
- experimentações sem impacto operacional.

---

# Fluxo do Sistema

```txt id="n8s5xu"
Usuário abre a sidebar
        ↓
Preenche os campos
        ↓
Sistema valida informações
        ↓
Sistema normaliza os textos
        ↓
UTM é gerada
        ↓
Resultado é salvo na planilha
        ↓
Evento é registrado em log
```

---

# Funcionalidades

## Geração de UTMs

Geração automatizada de:
- utm_source;
- utm_medium;
- utm_campaign;
- utm_content;
- utm_term.

---

## Normalização Automática

O sistema:
- converte textos para lowercase;
- remove acentos;
- remove caracteres especiais;
- substitui espaços por `_`.

---

## Integração com Bases Dinâmicas

Os dropdowns podem ser alimentados via:
- aba BASE;
- aba base_atlz.

---

## Registro Automático

Toda geração pode ser armazenada:
- data;
- parâmetros utilizados;
- URL final;
- histórico operacional.

---

# Estrutura das Abas

| Aba | Finalidade |
|---|---|
| BASE | Dados principais |
| base_atlz | Dados auxiliares |
| RESULTADOS | URLs geradas |
| LOGS | Registro de eventos |
| PARAMETROS | Configurações globais |

---

# Regras Operacionais

## Padronização

Toda UTM deve seguir:
- nomenclatura padronizada;
- estrutura previsível;
- consistência operacional.

---

## Integridade

O sistema evita:
- campos obrigatórios vazios;
- geração inválida;
- inconsistência de parâmetros.

---

# Exemplo de URL Gerada

```txt id="u3v7bn"
https://site.com/?utm_source=instagram&utm_medium=social&utm_campaign=blackfriday_2026
```

---

# Desenvolvimento Local

O desenvolvimento do projeto é realizado localmente utilizando:
- VS Code;
- Cursor.

---

# Versionamento

O projeto utiliza:
- Git;
- GitHub.

---

# Organização Recomendada

## Estrutura Local

```txt id="i9f2pd"
Projetos-git/
└── gerador-utm/
```

---

# Publicação

Atualmente a publicação é realizada manualmente no Google Apps Script.

Futuramente será utilizada integração via:

```txt id="j8v4rk"
clasp
```

---

# Segurança

O projeto NÃO deve armazenar:
- tokens;
- credenciais;
- dados sensíveis;
- informações privadas de clientes.

---

# Arquivos Ignorados

Utilização de:

```txt id="r2m8fw"
.gitignore
```

para evitar versionamento de:
- arquivos temporários;
- segredos;
- configurações locais;
- ambientes específicos.

---

# Estrutura de Documentação

A pasta:

```txt id="v9z5pt"
docs/
```

contém:
- documentação técnica;
- estrutura das planilhas;
- regras de negócio;
- processo de instalação.

---

# Estrutura de Samples

A pasta:

```txt id="k3n6cx"
samples/
```

deve conter:
- modelos limpos;
- exemplos de planilhas;
- arquivos fictícios para testes.

---

# Objetivos Técnicos

O sistema foi desenvolvido visando:
- manutenção facilitada;
- escalabilidade;
- reutilização;
- replicação;
- separação de responsabilidades.

---

# Objetivos Estratégicos

Transformar o projeto em:
- produto replicável;
- automação comercial;
- solução escalável;
- ferramenta operacional profissional.

---

# Melhorias Futuras

## Planejadas

- integração com APIs;
- sincronização automática;
- dashboard operacional;
- logs avançados;
- controle de usuários;
- histórico de campanhas;
- integração com Meta Ads;
- integração com Google Ads;
- deploy automatizado;
- integração via clasp.

---

# Boas Práticas Utilizadas

- separação de responsabilidades;
- modularização;
- padronização de nomenclatura;
- reutilização de código;
- centralização de regras;
- documentação técnica;
- ambiente de testes isolado.

---

# Escalabilidade

A arquitetura foi planejada para suportar:
- múltiplos clientes;
- crescimento operacional;
- aumento de campanhas;
- futuras integrações.

---

# Status do Projeto

| Status | Situação |
|---|---|
| Estrutura base | Em desenvolvimento |
| Modularização | Implementada |
| Documentação | Em evolução |
| Versionamento | Em implantação |
| Escalabilidade | Planejada |

---

# Controle de Versão

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | Preencher | Estrutura inicial do README |

---

# Autor

## Thalles Teixeira

Projeto desenvolvido com foco em:
- automação operacional;
- escalabilidade;
- organização de campanhas;
- profissionalização de processos de marketing digital.
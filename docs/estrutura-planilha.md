# Estrutura da Planilha

Este documento descreve toda a estrutura esperada da planilha utilizada pelo sistema de geração de UTMs.

O objetivo desta documentação é:
- padronizar a estrutura;
- facilitar manutenção;
- permitir replicação para clientes;
- evitar quebra do sistema por alteração de layout;
- facilitar onboarding de novos usuários.

---

# Estrutura Geral

A planilha é composta pelas seguintes abas:

| Aba | Finalidade |
|---|---|
| BASE | Base principal de dados utilizados pelo sistema |
| base_atlz | Base complementar/dinâmica |
| RESULTADOS | Armazenamento das UTMs geradas |
| LOGS | Registro de eventos e erros |
| PARAMETROS | Configurações gerais do sistema |

---

# Aba: BASE

## Finalidade

Armazenar os dados principais utilizados nos dropdowns e validações do sistema.

---

## Estrutura Esperada

| Coluna | Campo | Descrição |
|---|---|---|
| A | Marca | Nome da marca |
| B | Source | Origem da campanha |
| C | Medium | Meio da campanha |
| D | Campanha | Nome base da campanha |
| E | Observações | Campo opcional |

---

## Exemplo

| Marca | Source | Medium | Campanha |
|---|---|---|---|
| nike | instagram | social | lancamento |
| adidas | facebook | paid | blackfriday |

---

## Regras

- Não deixar linhas vazias entre registros
- Não alterar nomes das colunas
- Evitar caracteres especiais
- Preferencialmente utilizar texto sem acentos

---

# Aba: base_atlz

## Finalidade

Armazenar dados auxiliares e atualizações dinâmicas do sistema.

Pode ser utilizada para:
- novas campanhas;
- novas marcas;
- novos parâmetros;
- integrações futuras.

---

## Estrutura Esperada

| Coluna | Campo | Descrição |
|---|---|---|
| A | Tipo | Categoria da informação |
| B | Valor | Valor utilizado |
| C | Status | Ativo/Inativo |
| D | Atualização | Data da atualização |

---

## Exemplo

| Tipo | Valor | Status |
|---|---|---|
| source | instagram | ativo |
| medium | social | ativo |

---

# Aba: RESULTADOS

## Finalidade

Armazenar todas as UTMs geradas pelo sistema.

---

## Estrutura Esperada

| Coluna | Campo | Descrição |
|---|---|---|
| A | Data | Data da geração |
| B | Marca | Marca utilizada |
| C | URL Base | URL original |
| D | Source | utm_source |
| E | Medium | utm_medium |
| F | Campaign | utm_campaign |
| G | Content | utm_content |
| H | Term | utm_term |
| I | URL Final | URL completa gerada |

---

## Exemplo

| Marca | URL Base | URL Final |
|---|---|---|
| nike | https://site.com | https://site.com?utm_source=instagram... |

---

## Regras

- Não apagar manualmente linhas geradas
- Não alterar ordem das colunas
- Não editar URLs finais manualmente

---

# Aba: LOGS

## Finalidade

Registrar:
- erros;
- execuções;
- validações;
- eventos do sistema.

---

## Estrutura Esperada

| Coluna | Campo | Descrição |
|---|---|---|
| A | Data/Hora | Momento do evento |
| B | Tipo | INFO / WARNING / ERROR |
| C | Origem | Arquivo ou função |
| D | Mensagem | Descrição do evento |

---

## Exemplo

| Tipo | Origem | Mensagem |
|---|---|---|
| INFO | utm_generator | UTM gerada com sucesso |
| ERROR | validation | Campo URL vazio |

---

# Aba: PARAMETROS

## Finalidade

Centralizar configurações globais do sistema.

---

## Estrutura Esperada

| Coluna | Campo | Descrição |
|---|---|---|
| A | Chave | Nome do parâmetro |
| B | Valor | Valor configurado |

---

## Exemplo

| Chave | Valor |
|---|---|
| PREFIXO_DATA | true |
| LOWERCASE | true |
| REMOVER_ACENTOS | true |

---

# Regras Gerais da Planilha

## Estrutura

- Não renomear abas sem atualização do código
- Não alterar ordem das colunas sem atualização do sistema
- Não excluir abas utilizadas pelo Apps Script

---

## Permissões

Recomendado:
- operadores com permissão de edição limitada;
- administradores com acesso total;
- proteção de ranges críticos.

---

## Integridade dos Dados

Recomendado:
- utilizar validação de dados;
- evitar preenchimento manual incorreto;
- manter padronização operacional.

---

# Dependências do Sistema

O funcionamento correto depende:
- da existência das abas esperadas;
- da manutenção das colunas;
- da integridade dos dados;
- da autorização do Apps Script.

---

# Estrutura Recomendada de Crescimento

Futuramente podem ser adicionadas abas como:

| Aba | Objetivo |
|---|---|
| HISTORICO | Histórico de campanhas |
| CLIENTES | Multi-clientes |
| USUARIOS | Controle de operadores |
| DASHBOARD | Métricas operacionais |
| ERROS | Auditoria detalhada |

---

# Observações Técnicas

## Compatibilidade

Sistema desenvolvido para:
- Google Sheets;
- Google Apps Script;
- ambiente Google Workspace.

---

## Escalabilidade

A estrutura foi pensada para:
- crescimento do volume de campanhas;
- múltiplos operadores;
- replicação para clientes;
- evolução futura do sistema.

---

# Controle de Alterações

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | Preencher | Estrutura inicial da documentação |

---

# Responsável

Projeto desenvolvido por:

Thalles Teixeira
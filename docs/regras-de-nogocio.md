# Regras de Negócio

Este documento descreve todas as regras operacionais, validações, padronizações e comportamentos esperados do sistema Gerador de UTM.

O objetivo é garantir:
- padronização operacional;
- previsibilidade;
- integridade dos dados;
- consistência das campanhas;
- redução de erros humanos;
- escalabilidade do sistema.

---

# Objetivo do Sistema

O sistema foi desenvolvido para automatizar a criação padronizada de URLs UTM utilizadas em campanhas de marketing digital.

A automação busca:
- reduzir erros manuais;
- acelerar a operação;
- padronizar nomenclaturas;
- facilitar rastreamento de campanhas;
- melhorar organização analítica.

---

# Estrutura Padrão das UTMs

O sistema utiliza os parâmetros padrão do mercado:

| Parâmetro | Finalidade |
|---|---|
| utm_source | Origem do tráfego |
| utm_medium | Meio utilizado |
| utm_campaign | Nome da campanha |
| utm_content | Diferenciação de criativos |
| utm_term | Termos adicionais |

---

# Estrutura da URL Final

Formato padrão:

```txt id="n7h8zp"
https://site.com/?utm_source=origem&utm_medium=meio&utm_campaign=campanha
```

---

# Campos Obrigatórios

Os seguintes campos são obrigatórios para geração da UTM:

| Campo | Obrigatório |
|---|---|
| URL Base | Sim |
| Source | Sim |
| Medium | Sim |
| Campaign | Sim |

---

# Campos Opcionais

| Campo | Obrigatório |
|---|---|
| Content | Não |
| Term | Não |
| Observações | Não |

---

# Regras de Normalização

## Lowercase

Todo texto deve ser convertido para minúsculo.

---

## Remoção de Acentos

Caracteres acentuados devem ser convertidos.

### Exemplo

```txt id="4d7qsv"
ação
↓
acao
```

---

## Substituição de Espaços

Espaços devem ser convertidos em `_`.

### Exemplo

```txt id="s6w2xn"
black friday
↓
black_friday
```

---

## Remoção de Caracteres Especiais

Caracteres especiais devem ser removidos.

### Exemplo

```txt id="f9u6bk"
campanha!
↓
campanha
```

---

# Regras de URL

## Preservação da URL Base

A URL original não deve ser alterada além da inclusão dos parâmetros UTM.

---

## Verificação de Parâmetros Existentes

Caso a URL já possua parâmetros:

```txt id="2y8qer"
?
```

o sistema deve concatenar UTMs utilizando:

```txt id="i8qz5v"
&
```

---

## Exemplo

### URL sem parâmetros

```txt id="70j9hv"
https://site.com
↓
https://site.com?utm_source=instagram
```

---

### URL com parâmetros existentes

```txt id="b7k6tu"
https://site.com?id=1
↓
https://site.com?id=1&utm_source=instagram
```

---

# Regras de Campanha

## Estrutura Recomendada

Formato recomendado:

```txt id="o8vxgn"
marca_objetivo_data
```

---

## Exemplo

```txt id="x4zjpt"
nike_lancamento_2026-05-21
```

---

# Regras de Source

## Padronização

Sources devem seguir nomenclatura padronizada.

---

## Exemplos Permitidos

| Correto |
|---|
| instagram |
| facebook |
| linkedin |
| email |
| whatsapp |

---

## Exemplos Não Recomendados

| Incorreto |
|---|
| Insta |
| Face |
| zap |
| e-mail |

---

# Regras de Medium

## Padronização

Mediums devem seguir nomenclatura consistente.

---

## Exemplos Permitidos

| Correto |
|---|
| social |
| paid |
| organic |
| email |
| referral |

---

# Regras de Campaign

## Objetivo

A campaign deve representar:
- ação;
- objetivo;
- campanha;
- contexto de rastreamento.

---

## Recomendado

```txt id="w6o7pk"
blackfriday_2026
```

---

## Evitar

- textos genéricos;
- campanhas duplicadas;
- caracteres especiais;
- nomes muito extensos.

---

# Regras de Content

## Objetivo

O campo content deve diferenciar:
- criativos;
- formatos;
- variações.

---

## Exemplos

| Exemplo |
|---|
| video01 |
| carrossel02 |
| story03 |

---

# Regras de Term

## Objetivo

Campo opcional utilizado para:
- segmentações;
- palavras-chave;
- públicos;
- parâmetros extras.

---

# Regras de Escrita na Planilha

## RESULTADOS

Toda geração deve registrar:
- data;
- parâmetros utilizados;
- URL final.

---

## Ordem das Colunas

A ordem das colunas NÃO deve ser alterada sem ajuste do código.

---

# Regras de Integridade

## Não sobrescrever dados manualmente

As linhas geradas pelo sistema não devem ser alteradas manualmente.

---

## Não excluir abas obrigatórias

As abas utilizadas pelo sistema são dependências críticas.

---

# Regras de Dropdowns

## Bases Dinâmicas

Dropdowns devem carregar dados:
- da aba BASE;
- da aba base_atlz.

---

## Atualização

Novos valores devem ser adicionados nas bases antes de utilização operacional.

---

# Regras de Logs

## Objetivo

Registrar:
- erros;
- execuções;
- falhas;
- eventos importantes.

---

## Tipos de Log

| Tipo | Descrição |
|---|---|
| INFO | Operação normal |
| WARNING | Alerta operacional |
| ERROR | Falha crítica |

---

# Regras de Validação

## Antes da geração

O sistema deve validar:
- campos obrigatórios;
- URL válida;
- estrutura mínima;
- existência de dados necessários.

---

## Em caso de erro

O sistema deve:
- impedir geração inválida;
- exibir mensagem ao usuário;
- registrar log.

---

# Regras de Segurança

## Restrições

Não armazenar:
- tokens;
- credenciais;
- informações sensíveis;
- dados privados de clientes.

---

# Regras Operacionais

## Fluxo esperado

```txt id="u6r4fa"
Usuário abre sidebar
↓
Preenche informações
↓
Sistema valida
↓
Sistema normaliza
↓
UTM é gerada
↓
Resultado é salvo
↓
Log é registrado
```

---

# Regras de Escalabilidade

A estrutura foi planejada para suportar:
- múltiplos clientes;
- crescimento operacional;
- novas integrações;
- aumento de volume de campanhas.

---

# Regras Futuras Planejadas

## Melhorias previstas

- validação automática avançada;
- bloqueio de duplicidade;
- histórico de campanhas;
- integração com Meta Ads;
- integração com Google Ads;
- autenticação;
- dashboard operacional;
- API própria.

---

# Padrões Arquiteturais Utilizados

## Separação de Responsabilidades

| Arquivo | Responsabilidade |
|---|---|
| utm_generator.gs | Regras de negócio |
| text_utils.gs | Utilidades de texto |
| sheet_service.gs | Operações da planilha |
| base_service.gs | Bases auxiliares |
| sidebar.gs | Comunicação frontend/backend |

---

# Objetivo Estratégico

Transformar o sistema em:
- produto operacional;
- solução replicável;
- ferramenta escalável;
- automação profissional.

---

# Controle de Alterações

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | Preencher | Estrutura inicial das regras de negócio |

---

# Responsável Técnico

Projeto desenvolvido por:

Thalles Teixeira
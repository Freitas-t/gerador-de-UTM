# Instalação do Cliente

Este documento descreve o processo de instalação, configuração e ativação do sistema Gerador de UTM.

O objetivo é garantir:
- padronização da implantação;
- estabilidade operacional;
- segurança do ambiente;
- correta configuração do sistema;
- facilidade de replicação entre clientes.

---

# Visão Geral da Implantação

O sistema é composto por:

| Componente | Tecnologia |
|---|---|
| Interface operacional | Google Sheets |
| Backend | Google Apps Script |
| Sidebar | HTML + Apps Script |
| Regras de negócio | JavaScript |
| Base de dados | Google Sheets |

---

# Modelo de Distribuição

O sistema NÃO é distribuído publicamente.

A implantação é realizada:
- manualmente;
- mediante contratação;
- diretamente pelo desenvolvedor responsável.

---

# Pré-Requisitos

## Conta Google

O cliente deve possuir:
- conta Google ativa;
- acesso ao Google Sheets;
- permissão de edição na planilha.

---

## Navegador Recomendado

Recomendado:
- Google Chrome;
- Microsoft Edge.

---

## Permissões Necessárias

Durante a primeira execução o Google solicitará autorização para:

- leitura de planilhas;
- escrita em planilhas;
- execução do Apps Script;
- exibição de interface.

---

# Estrutura da Implantação

A implantação consiste em:

1. Criação da pasta do cliente
2. Criação da cópia da planilha
3. Configuração do Apps Script
4. Validação da estrutura
5. Testes operacionais
6. Liberação para uso

---

# Processo de Implantação

## Passo 1 — Criar Pasta do Cliente

Criar uma pasta exclusiva no Google Drive.

Exemplo:

```txt id="0b7n7l"
Clientes/
└── Cliente XYZ/
```

---

## Passo 2 — Criar Cópia da Planilha Modelo

Duplicar a planilha base do sistema.

Renomear utilizando padrão:

```txt id="u2lt8m"
GERADOR_UTM_CLIENTE_NOME
```

Exemplo:

```txt id="jlwm74"
GERADOR_UTM_NIKE
```

---

## Passo 3 — Validar Estrutura da Planilha

Confirmar existência das abas obrigatórias:

| Aba | Obrigatória |
|---|---|
| BASE | Sim |
| base_atlz | Sim |
| RESULTADOS | Sim |
| LOGS | Sim |
| PARAMETROS | Sim |

---

## Passo 4 — Abrir o Apps Script

Acessar:

```txt id="i3qk3u"
Extensões → Apps Script
```

---

## Passo 5 — Inserir Arquivos do Projeto

Criar os arquivos conforme a estrutura oficial do sistema.

---

## Estrutura Esperada

```txt id="z7dg6s"
src/
│
├─ Menu.gs
├─ Sidebar.html
├─ sidebar.gs
├─ utm_generator.gs
├─ text_utils.gs
├─ sheet_service.gs
├─ base_service.gs
└─ ambienteDeTestes.gs
```

---

# Descrição dos Arquivos

| Arquivo | Finalidade |
|---|---|
| Menu.gs | Criação do menu do sistema |
| Sidebar.html | Interface visual |
| sidebar.gs | Comunicação frontend/backend |
| utm_generator.gs | Regras de geração das UTMs |
| text_utils.gs | Tratamento de strings |
| sheet_service.gs | Manipulação da planilha |
| base_service.gs | Serviços de bases auxiliares |
| ambienteDeTestes.gs | Ambiente de validação e testes |

---

# Passo 6 — Autorizar Permissões

Na primeira execução:
- o Google solicitará permissões;
- o administrador deve autorizar o projeto.

---

# Permissões Esperadas

O sistema pode solicitar:

| Permissão | Finalidade |
|---|---|
| Visualizar planilhas | Ler bases |
| Editar planilhas | Escrever resultados |
| Executar Apps Script | Processar automações |

---

# Passo 7 — Atualizar a Planilha

Após autorização:
- atualizar a página do Google Sheets.

O menu deverá aparecer:

```txt id="mklx9g"
Automação
```

---

# Passo 8 — Teste Operacional

Executar teste completo:

## Validar:
- abertura da sidebar;
- carregamento dos dropdowns;
- geração da UTM;
- gravação na planilha;
- funcionamento dos logs.

---

# Estrutura Recomendada do Google Drive

```txt id="fsv4xw"
Clientes/
│
├── Cliente A/
│   ├── Planilhas/
│   ├── Backup/
│   └── Documentação/
│
├── Cliente B/
│   ├── Planilhas/
│   ├── Backup/
│   └── Documentação/
```

---

# Controle de Acesso

Recomendado:

| Perfil | Permissão |
|---|---|
| Operador | Editor limitado |
| Gestor | Editor |
| Desenvolvedor | Proprietário |

---

# Segurança

## Recomendações

- não compartilhar acesso ao Apps Script;
- restringir administradores;
- manter backup periódico;
- evitar exclusão manual de abas;
- proteger ranges críticos.

---

# Backup

Recomendado:

## Frequência
- semanal;
- antes de atualizações importantes.

---

## Métodos
- cópia da planilha;
- exportação XLSX;
- backup da estrutura do Apps Script.

---

# Atualizações do Sistema

Atualizações devem ser realizadas:
- somente pelo desenvolvedor responsável;
- em ambiente validado;
- preferencialmente fora do horário operacional.

---

# Ambiente de Testes

O arquivo:

```txt id="jlwmg6"
ambienteDeTestes.gs
```

é utilizado para:
- validações;
- testes de novas funcionalidades;
- simulações;
- homologações.

---

# Procedimento de Homologação

Antes de liberar atualização:

## Validar:
- geração das UTMs;
- integridade das abas;
- funcionamento da sidebar;
- escrita correta dos resultados;
- ausência de erros nos logs.

---

# Problemas Comuns

## Menu não aparece

### Possíveis causas:
- página não atualizada;
- erro de autorização;
- erro de sintaxe no Apps Script.

---

## Sidebar não abre

### Possíveis causas:
- erro no HTML;
- falha de permissão;
- bloqueio do navegador.

---

## UTM não gera

### Possíveis causas:
- campos vazios;
- erro nas bases;
- problema de normalização;
- erro em validações.

---

# Escalabilidade

A estrutura foi planejada para:
- múltiplos clientes;
- expansão operacional;
- futuras integrações;
- crescimento do volume de campanhas.

---

# Futuras Melhorias Planejadas

- sincronização automática via clasp;
- deploy automatizado;
- ambiente homologação/produção;
- dashboard operacional;
- logs avançados;
- API própria;
- sistema multiusuário.

---

# Controle de Versão

| Versão | Data | Alteração |
|---|---|---|
| 1.0 | Preencher | Estrutura inicial da instalação |

---

# Responsável Técnico

Projeto desenvolvido por:

Thalles Teixeira
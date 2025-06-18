# API CRUD com Node.js, Express, Knex e MySQL

Este projeto é uma API RESTful desenvolvida com Node.js, Express e MySQL utilizando o Knex.js como query builder. O objetivo é fornecer operações CRUD para gerenciamento de dados.

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

## Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/miyuufee/api-crud-js-main.git
cd api-crud-js-main
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o ambiente**

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis (edite conforme seu ambiente):

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=3306
```

4. **Configure o banco de dados**

Certifique-se de que o MySQL esteja rodando e que você tenha criado o banco de dados. Em seguida, rode as migrations (se houver) com:

```bash
npx knex migrate:latest
```

> As configurações do banco de dados estão definidas em `knexfile.js`.

## Executando a aplicação

Para rodar em modo desenvolvimento (com hot reload via `nodemon`):

```bash
npm run dev
```

A API será iniciada no endereço `http://localhost:3000` (ou outra porta definida no projeto).

## Estrutura do projeto

```
api-crud-js-main/
├── banco-de-dados/       # Possíveis scripts SQL
├── public/               # Arquivos públicos (se houver)
├── src/                  # Código-fonte da aplicação
│   └── server.js         # Ponto de entrada da API
├── knexfile.js           # Configuração do Knex
├── .env                  # Variáveis de ambiente
├── package.json
└── README.md
```

## Tecnologias utilizadas

- Node.js
- Express
- MySQL
- Knex.js
- dotenv
- nodemon

---

Desenvolvido por Alex Freire.

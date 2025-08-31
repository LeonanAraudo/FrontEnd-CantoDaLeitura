# Vue Project - Sistema de gerenciamento para bibliotecas

<p>O sistema consiste em uma interface principal que alterna entre opções de cadastros e visualizações de livros</p>

Teste a aplicação: https://canto-da-leitura.vercel.app/

Repositório backend: https://github.com/LeonanAraudo/BackEnd-CantoDaLeitura

⚠️O primeiro cadastro de autor pode demorar um pouco.

## 🚀 Tecnologias Utilizadas

### Core
- **Vue.js 3.5.13** - Framework JavaScript progressivo
- **Vite 6.1.0** - Build tool e dev server
- **Pinia 3.0.1** - Gerenciamento de estado
- **Vue Router 4.5.0** - Roteamento SPA

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios
```
src/
├── components/     # Componentes Vue reutilizáveis
├── views/         # Páginas/rotas da aplicação
├── stores/        # Stores Pinia para gerenciamento de estado
├── router/        # Configuração de rotas
└── assets/        # Recursos estáticos
```

### Padrões de Projeto
- **Composition API** - Uso de `<script setup>` e composables
- **Store Pattern** - Gerenciamento centralizado de estado com Pinia
- **Component-Based Architecture** - Componentes modulares e reutilizáveis
- **API Integration** - Comunicação com backend REST via fetch API

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## ⚙️ Instalação e Configuração

### 1. Clone o repositório
```bash
git clone <repository-url>
cd vue-project
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o projeto em desenvolvimento
```bash
npm run dev
```

### 4. Build para produção
```bash
npm run build
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa ESLint com correções automáticas
- `npm run format` - Formata código com Prettier

## 🌐 API Backend

O projeto consome uma API REST externa:
- **Base URL**: `https://desafio-backend-obsis.onrender.com`
- **Endpoints**: `/books/`, `/authors/`, `/authors/tops/`

## 📱 Funcionalidades

- Listagem de livros e autores
- Edição de livros
- Ranking dos top 5 autores
- Interface responsiva e moderna
- Gerenciamento de estado centralizado

## 🚀 Deploy

Para fazer deploy, execute:
```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

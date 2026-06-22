# 🏡 Airbnb Clone

Clone da interface do Airbnb desenvolvido como projeto final do curso de **Front-end**. A aplicação consome uma API REST para exibir acomodações, suas fotos, avaliações e depoimentos, reproduzindo a experiência de navegação do site original.

> Projeto construído para consolidar conceitos de **Next.js (App Router)**, **TypeScript**, **Server Components** e **Tailwind CSS** em uma aplicação real e completa.

---

## ✨ Funcionalidades

- 📋 Listagem de acomodações com foto, localização, anfitrião, data, avaliação e preço
- 🔍 Barra de pesquisa e navegação por categorias (abas horizontais com ícones)
- 🏷️ Selo de "Preferido dos hóspedes" para acomodações em destaque
- 📄 Página de detalhes dinâmica por acomodação (`/[id]`)
- 🖼️ Galeria de fotos da acomodação
- 💬 Seção de depoimentos e avaliações de hóspedes
- 📱 Layout responsivo (mobile, tablet e desktop)

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org/) | Framework React com App Router e Server Components |
| [React 19](https://react.dev/) | Biblioteca de interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização utilitária |
| [Tabler Icons](https://tabler.io/icons) | Ícones |
| [Swiper](https://swiperjs.com/) | Carrossel/galeria de imagens |
| [ESLint](https://eslint.org/) | Padronização e qualidade de código |

---

## 📂 Estrutura do projeto

```
src/
├── app/                      # Rotas (App Router)
│   ├── page.tsx              # Página inicial — listagem de acomodações
│   ├── layout.tsx            # Layout raiz
│   └── [id]/page.tsx         # Página de detalhes da acomodação
│
├── components/               # Componentes de UI reutilizáveis
│   ├── Acomodacao/            # Card de acomodação
│   └── Logo/                 # Logo e botão de ícone
│
├── widgets/                  # Blocos de página compostos por componentes
│   ├── Acomodacoes.tsx        # Grid de acomodações
│   ├── AcomodacaoDetalhes.tsx
│   ├── AcomodacaoDepoimentos.tsx
│   ├── BarraSuperior.tsx
│   ├── BarraPesquisa.tsx
│   ├── NavegacaoAbasHorizontal.tsx
│   ├── Galeria.tsx
│   └── Rodape.tsx
│
├── types/                    # Tipagens compartilhadas (TypeScript)
│   └── AirbnbDados.ts
│
├── utils/                    # Funções utilitárias
│   └── api.ts                 # Funções de fetch dos dados (fetchData, fetchDataById)
│
└── assets/                   # Ícones e recursos estáticos
    └── icones.ts
```

---

## 🚀 Como executar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18.18 ou superior
- npm, yarn, pnpm ou bun

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Acesse a pasta do projeto
cd seu-repositorio

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado. 🎉

### Outros scripts disponíveis

```bash
npm run build   # Gera a build de produção
npm run start   # Inicia o servidor a partir da build de produção
npm run lint    # Executa o ESLint
```

---

## 🌐 Fonte de dados

Os dados das acomodações (título, localização, fotos, depoimentos, etc.) são consumidos de uma API externa através das funções em `src/utils/api.ts`:

- `fetchData()` — busca a lista completa de acomodações e ícones de categoria
- `fetchDataById(id)` — busca uma acomodação específica pelo seu `slug`

---

## 📚 Aprendizados

Este projeto foi desenvolvido como trabalho de conclusão do curso de Front-end e teve como principais objetivos:

- Praticar a arquitetura do **App Router** do Next.js, incluindo rotas dinâmicas e Server Components
- Estruturar um projeto React em camadas (`components`, `widgets`, `types`, `utils`)
- Tipar dados de API de forma consistente com TypeScript
- Construir interfaces responsivas com Tailwind CSS
- Consumir e tratar dados assíncronos vindos de uma API externa

---

## 📄 Licença

Projeto desenvolvido para fins educacionais.

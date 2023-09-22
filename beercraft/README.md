O teste consiste em criar uma aplicação que expõe uma API REST de um CRUD de produtos e autenticação, e uma aplicação web contendo uma interface para login e acesso a dados de uma API externa. 

Depois de logado, o usuário da aplicação web deve poder acessar os dados da [Punk API v2](https://punkapi.com/). 

NOTA: O front-end e back-end deve ser realizado apenas por desenvolvedores Full Stack. Caso contrário, realize o teste de acordo com sua área de atuação.

## Back-end 💻
- Todos os endpoints de consulta de dados devem ter autenticação por webtoken ou similar.
- Deve existir validação dos dados recebidos pela API.
- O CRUD não precisa de interface, apenas o login e o cadastro

## Front-end 🎨
O front-end deve atender aos seguintes requisitos:
- Interface de login e cadastro com feedbacks para usuário ou senha incorreta.
- Listagem dos dados da Punk API v2.
- Responsividade.

## Extras 🌟
O desenvolvimento dessas features é opcional.

- Filtragem dos dados da Punk API v2 por diferentes critérios, como nome, estilo de cerveja, teor alcoólico, etc.
- Ordenação dos dados da Punk API v2 por diferentes campos, como nome, teor alcoólico, etc.
- Comentários e avaliações: permitir que os usuários deixem comentários e avaliações para as cervejas.
- Dockerfile com todas as dependências.

## Critérios de avaliação ✅
- Funcionamento do projeto.
- Estrutura do código.
- Uso de boas práticas.
- Cumprimento dos requisitos mínimos.

## Entrega 📦

- Um repositório git (fork deste).
- Um README do projeto com o passo-a-passo para executar a aplicação.

## Observações 📝

1. Pode ser utilizado qualquer framework front-end, preprocessadores de css, task runners, bundlers, etc, de sua preferência, mas nenhum deles é de uso obrigatório.

2. Não se deve fazer o commit de pastas como node_modules, o projeto deve instalar suas dependências a partir do package.json.

____

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

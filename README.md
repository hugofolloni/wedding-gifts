# wedding-gifts 🎁

## Descrição 📝
O **wedding-gifts** é uma aplicação web completa com uma API, projetada para simplificar o gerenciamento de presentes de casamento. Os noivos podem facilmente adicionar presentes à lista e acompanhar quem já escolheu comprar cada item. Os convidados têm acesso a uma lista organizada de presentes, podendo escolher, comprar e pagar através de um código PIX gerado automaticamente.

## Tecnologias Utilizadas 💻
- **Front-end**: React, TypeWriter, Criptografia MD5
- **Back-end**: Node.js, Express, PostgreSQL, PixJS, dotenv
- **Banco de Dados**: PostgreSQL, versão-legado em MySql

## Instruções de Instalação 🛠️
1. Clone o repositório git:
    ```bash
    git clone https://github.com/seu-usuario/wedding-gifts.git
    ```
2. **Front-end**:
    ```bash
    cd wedding-gifts/website
    npm i
    npm start
    ```
3. **Back-end**:
    - Gere um banco de dados PostgreSQL e atualize as informações no arquivo `.env` dentro da pasta `server`.
    - Execute os scripts de criação das tabelas disponíveis no arquivo `database.js` dentro da pasta `server/api`.
    ```bash
    cd wedding-gifts/server
    npm i
    npm start
    ```

## Como Usar 🎉
### Para Convidados 👰🤵
1. Navegue pelo layout bonito e delicado.
2. Analise a lista de presentes e escolha o que deseja comprar.
3. Clique no presente escolhido para comprar.
4. Insira seu nome para ser adicionado à lista de compradores.
5. Realize o pagamento utilizando o código PIX gerado automaticamente.

### Para Noivos 👰🤵
1. Acesse a aba /admin para adicionar novos presentes.
2. Acompanhe a lista de compradores de cada presente.

## Endpoints da API 🌐
- **/gifts**: Retorna todos os presentes cadastrados.
- **/buyers**: Retorna os compradores de cada presente.

## Requisitos do Sistema 📋
- Node.js instalado

## Contribuição 🤝
Sinta-se à vontade para contribuir com o projeto! Basta fazer um fork do repositório, implementar suas melhorias e enviar um pull request.

## Licença 📜
Este projeto está sob a licença MIT.

## Contato 📞
Para suporte ou para relatar problemas, entre em contato através do email: [hugofollogua07@gmail.com](mailto:hugofollogua07@gmail.com)

# Spotifood

## Dependências

- (Node.js 12+)[https://nodejs.org/]
- (spotifood-bff)[https://github.com/morenopereira/bff-spotifood]

## Problemas encontrados

Um dos valores respondidos pela api não funciona, mas especificamente o parâmetro value dos EUA no array de countries. Então para corrigir criei uma função que seta os parâmetros manualmente para garantir que funcione.

## Tecnologias usadas

- React
- Redux
- Redux-Thunk
- SASS
- Storybook
- Eslint
- Prettier
- Docker e Docker Compose

## Desenvolvimento

Clonar o projeto spotifood-bff

1. `cd spotifood-bff`
2. `cp .env.sample .env` (E alterar as envs necessárias)
3. `npm install` or `yarn`
4. `npm start` or `yarn start`

Clonar esse projeto

1. `cd spotifood`
2. `cp .env.sample .env` (E alterar as envs necessárias)
3. `npm install` or `yarn`
4. `npm start` or `yarn start`

## Rodando projeto no docker

1. `cd spotifood-bff`
2. `cp .env.sample .env` (E alterar as envs necessárias)
3. `docker-compose uo --build`

4. `cd .. && cd spotifood`
5. `cp .env.sample .env` (E alterar as envs necessárias)
6. `docker-compose uo --build`

## Scripts

- `start` - Starts development server
- `build` - Builds the application assets for production
- `test` - Runs all unit tests
- `lint` - Run lint
- `storybook` - Run storybook

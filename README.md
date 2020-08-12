# Spotifood

## Project

Example project consuming the Spotify api. Using the most used techologies on the market. Mobile first was thought, since most of the accesses to the web today are via mobile.

## Dependencies

- (Node.js 12+)[https://nodejs.org/]
- (spotifood-bff)[https://github.com/morenopereira/bff-spotifood]

## Problems

One of the values answered by the api does not work, but specifically the US value parameter in the countries array. So to fix it I created a function that sets the parameters manually to make sure it works.

## Technologies used

- React
- Redux
- Redux-Thunk
- React Test Library
- Date-fns
- Husky
- SASS
- Storybook
- Eslint
- Prettier
- Docker e Docker Compose

## Development

Clone spotifood-bff

1. `cd spotifood-bff`
2. `cp .env.sample .env` (And change the required envs)
3. `npm install` or `yarn`
4. `npm start` or `yarn start`

Clone this repository

1. `cd spotifood`
2. `cp .env.sample .env` (And change the required envs)
3. `npm install` or `yarn`
4. `npm start` or `yarn start`

## Running with Docker

1. `cd spotifood-bff`
2. `cp .env.sample .env` (And change the required envs)
3. `docker-compose uo --build`

4. `cd .. && cd spotifood`
5. `cp .env.sample .env` (And change the required envs)
6. `docker-compose uo --build`

## Scripts

- `start` - Starts development server
- `build` - Builds the application assets for production
- `test` - Runs all unit tests
- `lint` - Run lint
- `storybook` - Run storybook

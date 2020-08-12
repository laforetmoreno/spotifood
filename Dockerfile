FROM node:12.16.1-alpine as base

RUN apk add --update --no-cache alpine-sdk python

WORKDIR /spotifood/

COPY package.json yarn.lock .eslintrc.json .prettierrc jsconfig.json /spotifood/
RUN yarn

COPY src /spotifood/src/
COPY public /spotifood/public/
COPY .storybook /spotifood/.storybook/

EXPOSE 3000

FROM base as development

CMD yarn start

FROM base as production

CMD yarn start

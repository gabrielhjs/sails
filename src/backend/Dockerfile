FROM node:alpine

ENV HOME=/home/app

COPY package.json yarn.lock ormconfig.json tsconfig.json $HOME/node_docker/
COPY ./dist/ $HOME/node_docker/dist/

WORKDIR $HOME/node_docker/

RUN yarn install --frozen-lockfile
RUN yarn typeorm migration:run -c production

USER 1001
EXPOSE 80


CMD ["yarn", "start"]

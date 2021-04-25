FROM node:lts

ENV HOME=/home/app

COPY package.json yarn.lock ormconfig.json $HOME/node_docker/

WORKDIR $HOME/node_docker/

RUN yarn install --frozen-lockfile && yarn global add tsc rimraf
RUN rimraf dist && tsc


USER 1001
EXPOSE 3333


CMD ["yarn", "start"]

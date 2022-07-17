FROM node:slim

WORKDIR /app

ENV NODE_VERSION 18.4.0
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
COPY . ./

CMD ["yarn", "start"]

FROM node:22

WORKDIR /usr/src/app

COPY package*.json .
COPY index.js .
COPY .env .
COPY public ./public

RUN npm install

CMD ["node", "index.js"]
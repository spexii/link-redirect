FROM node:22

WORKDIR /usr/src/app

COPY package*.json .
COPY src ./src
COPY .env .
COPY public ./public

RUN npm install

CMD ["npm", "start"]
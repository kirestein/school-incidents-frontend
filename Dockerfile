FROM node:20-alpine

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]
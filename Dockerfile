FROM node:alpine

RUN mkdir -p /var/www

WORKDIR /var/www

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npx", "sequelize db:migrate" ]

CMD ["node", "dist/server.js"]



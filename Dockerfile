FROM node:carbon

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

EXPOSE 7000

CMD ["node", "app.js"]

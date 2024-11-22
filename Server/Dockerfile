FROM node:16-alpine AS backend-builder

WORKDIR /app

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm install -g nodemon

EXPOSE 5000

CMD [ "nodemon", "index.js" ]
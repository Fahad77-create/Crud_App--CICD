FROM node:16-alpine AS frontend-builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm build

# Increase npm timeout settings (for socket-timeout error)
RUN npm config set fetch-retry-maxtimeout 60000
RUN npm config set fetch-retry-mintimeout 10000

FROM node:16-alpine
WORKDIR /app

COPY --from=frontend-builder /app/build ./public 

EXPOSE 3000

CMD [ "npm" , "start" ]






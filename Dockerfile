FROM node:lts-slim

WORKDIR /usr/src/app

# Pipeline already download dependencies
# COPY package*.json ./
# RUN npm install --omit=dev

COPY . .

EXPOSE 3000

ENV MONGO_DB_HOST 'localhost'

CMD [ 'npm', 'start' ]
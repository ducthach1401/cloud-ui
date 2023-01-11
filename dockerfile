FROM node:16-alpine

WORKDIR /var/www
COPY . /var/www/
RUN npm install -g serve

CMD [ "serve", "build" ]

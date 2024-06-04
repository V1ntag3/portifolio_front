# install node
FROM node:18-alpine

#INATALL NGINX AND SUPERVISOR

RUN apk update

RUN apk add nginx

RUN apk add supervisor

#REPPLACE NGINX DEFAULT WITH YOUR CODE

RUN rm -f /etc/nginx/http.d/default.conf

ADD ./docker/nginx/default.conf /etc/nginx/http.d/default.conf

#COPY YOUR SUPERVISOR CONFIG FILES INSIDE SUPERVISOR FOLDER

COPY ./docker/supervisor/supervisord.conf /etc/supervisor/supervisord.conf

COPY ./docker/supervisor/supervisor.conf /etc/supervisor/conf.d/supervisor.conf

#MAKE WORKING DIRECTORY AND LOGS DIRECTORY

RUN mkdir -p /usr/app/node_modules && chown -R node:node /usr/app

RUN mkdir -p /var/log/supervisor && chown -R node:node /var/log/supervisor

#INSTALL AND RUN NPM 

WORKDIR /usr/app

COPY package*.json  yarn.lock ./

RUN yarn install --production

COPY --chown=node:node . ./

EXPOSE 3000

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
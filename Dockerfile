FROM nginx:stable-alpine
LABEL auth="Myki"
LABEL maintainer="21kixc@gmail.com"

COPY ./docs /usr/share/nginx/html
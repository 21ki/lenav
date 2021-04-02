FROM harbor.mvmyun.com/library/git-alpine as builder1
WORKDIR /opt
RUN git clone https://gitlab.mvmyun.com/devops/lenav.git .


FROM node:12.21.0-alpine as builder2
WORKDIR /opt
COPY --from=builder1 /opt /opt
RUN set -eux; \
    npm install --registry=https://registry.npm.taobao.org; \
    npm run build; \
    npm run build-dev

FROM nginx:stable-alpine
LABEL auth="Myki"
LABEL maintainer="21kixc@gmail.com"
COPY --from=builder2 /opt/docs /usr/share/nginx/html

ARG APP_ROOT=/app

FROM node:10 AS build
ARG APP_ROOT
WORKDIR ${APP_ROOT}
ENV NODE_ENV=production
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY package*.json yarn.lock ./
RUN yarn
COPY public ./public
COPY src ./src
COPY .env* ./
RUN yarn build

# production environment
FROM nginx:alpine
ARG APP_ROOT
ENV APP_DIR=$APP_ROOT
RUN rm -rf /etc/nginx/conf.d && mkdir /usr/share/nginx/files && mkdir /usr/share/nginx/uploads && mkdir -p /var/www/html && mkdir /etc/letsencrypt
COPY nginx/ssl /etc/ssl
COPY nginx/default.conf.template /etc/nginx/conf.d/
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/start.sh ./
COPY --from=build ${APP_ROOT}/build /usr/share/nginx/html/
EXPOSE 80 443
ENTRYPOINT [ "./start.sh" ]
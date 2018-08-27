ARG APP_ROOT=/app

FROM node:10 AS build
ARG APP_ROOT
WORKDIR ${APP_ROOT}
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
COPY package*.json .env* yarn.lock ./
RUN yarn
RUN yarn add global react-scripts@1.1.4
COPY public ./public
COPY src ./src
RUN yarn build

# production environment
FROM nginx:alpine
ARG APP_ROOT
ENV APP_DIR=$APP_ROOT
RUN rm -rf /etc/nginx/conf.d
COPY nginx/app.conf /etc/nginx/conf.d/app.conf.template
COPY nginx/nginx.conf /etc/nginx/
COPY nginx/start.sh ./
COPY --from=build ${APP_ROOT}/build /usr/share/nginx/html/
EXPOSE 80
ENTRYPOINT [ "./start.sh" ]
#stage 1 build static
FROM node:14.15.4-alpine3.10 as s1

WORKDIR /opt/source

COPY . .

RUN npm install

RUN npm run build --prod


FROM nginx:1.19.6-alpine

WORKDIR /opt/static

COPY --from=s1 /opt/source/dist/service-fe .
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
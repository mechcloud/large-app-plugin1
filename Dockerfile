# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build-lib
RUN find /app/dist
COPY public/index.html dist/

# production stage
FROM nginx:stable-alpine as production-stage
COPY default.conf /etc/nginx/conf.d/
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN find /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


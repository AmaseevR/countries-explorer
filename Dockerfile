FROM node:16 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_COUNTRIES_GRAPHQL_API=https://graphql.country/graphql
ARG VITE_WEATHER_API_KEY=3db51f1f9bb4a9bf8a18dd464be72c68

ENV VITE_COUNTRIES_GRAPHQL_API=$VITE_COUNTRIES_GRAPHQL_API
ENV VITE_WEATHER_API_KEY=$VITE_WEATHER_API_KEY

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

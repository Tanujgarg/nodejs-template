FROM node:12.14.1

ENV NODE_ENV production

WORKDIR /app

COPY ./package.json /app
RUN npm install --production

COPY ./dist/* /app

EXPOSE 3000
CMD node index.js

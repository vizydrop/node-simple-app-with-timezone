FROM node:9.4.0-alpine

WORKDIR /timezone-custom-app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3400

ENV NODE_ENV production
ENV PORT 3400

ENTRYPOINT ["node"]
CMD ["timezone-custom-app.js"]

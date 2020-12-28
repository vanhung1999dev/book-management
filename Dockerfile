FROM node:12.14.0

RUN npm install

COPY . .

CMD ["npm","start"]

EXPOSE 3000:3000
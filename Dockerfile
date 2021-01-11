FROM node:12.14.0

WORKDIR /urs/my-app/book-management

RUN npm install

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]

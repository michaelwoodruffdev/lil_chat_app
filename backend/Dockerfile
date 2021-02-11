FROM ubuntu

WORKDIR /usr/src/app

COPY ./dist/server.js .

RUN apt-get update -y
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash
RUN apt-get install -y nodejs

EXPOSE 3000

CMD ["node", "./server.js"]

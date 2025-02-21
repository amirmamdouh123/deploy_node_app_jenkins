FROM node:hydrogen-alpine3.21

WORKDIR /myapp/


RUN npm init -y && npm install express

COPY ./nodejs-app.js .


EXPOSE 3000

ENTRYPOINT ["node" , "nodejs-app.js"]



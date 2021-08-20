FROM node:16-alpine
RUN mkdir /opt/backend/
ADD . /opt/backend/
WORKDIR /opt/backend/
RUN npm install
# RUN node initdb.js # Não necessario pois a base ja é criada na inicialização do banco
WORKDIR /
CMD ["/bin/sh","-c","cd /opt/backend/ && node index.js"]
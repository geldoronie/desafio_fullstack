FROM node:16-alpine
RUN mkdir /opt/frontend/
ADD . /opt/frontend/
WORKDIR /opt/frontend/
RUN npm install
WORKDIR /
CMD ["/bin/sh","-c","cd /opt/frontend && npm run start"]
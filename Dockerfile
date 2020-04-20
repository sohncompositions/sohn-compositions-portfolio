FROM node:latest

VOLUME ["~/.gitconfig" ]

WORKDIR /usr/src/sohn-compositions-portfolio

ENV NODE_ENV development

COPY package.json ./
COPY package-lock.json ./
COPY entrypoint.sh ./
RUN npm install

EXPOSE 4200

ENTRYPOINT ["/usr/src/sohn-compositions-portfolio/entrypoint.sh"]
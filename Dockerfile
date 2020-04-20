FROM node:latest

VOLUME ["~/.gitconfig" ]

WORKDIR /usr/src/sohn-compositions-portfolio

ENV NODE_ENV development

COPY package.json ./
RUN npm install

EXPOSE 4200

CMD ["/usr/src/sohn-compositions-portfolio/entrypoint.sh"]
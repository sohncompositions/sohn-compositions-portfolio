FROM node:latest

VOLUME ["~/.gitconfig", "/usr/src/sohn-compositions-portfolio" ]

WORKDIR /usr/src/cache

COPY package.json ./
COPY package-lock.json ./
RUN npm install

WORKDIR /usr/src/sohn-compositions-portfolio

COPY entrypoint.sh ./
ENV NODE_ENV development
EXPOSE 4200

ENTRYPOINT [ "/usr/src/sohn-compositions-portfolio/entrypoint.sh" ]
FROM node:8
WORKDIR . /app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "ace", "serve"]
CMD [ "node", "ace", "kue:listen"]
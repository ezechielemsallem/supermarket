FROM node:18.14.0-alpine
RUN apk update
WORKDIR /my_supermarket/frontend
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
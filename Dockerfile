FROM node:20
ENV PORT=8080
WORKDIR /usr/app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
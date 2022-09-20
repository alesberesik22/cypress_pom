FROM cypress/browsers:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
ENTRYPOINT [ "npx","cypress","run" ]
CMD [ "" ]
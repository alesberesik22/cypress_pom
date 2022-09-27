FROM cypress/browsers:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD npx cypress run
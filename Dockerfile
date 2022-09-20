FROM cypress/browsers:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD npx cypress run --record --key 5aa9fbcf-e200-499b-9d17-45a2c140de5b
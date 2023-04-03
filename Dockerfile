FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the app
#RUN npm run build

# Set the environment variables
ENV PORT=8080
ENV HOST=0.0.0.0

# Expose the port and start the app
EXPOSE 8080
CMD [ "npm", "run", "dev" ]

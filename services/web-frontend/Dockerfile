# Use Node.js LTS as the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY src ./src
COPY public ./public

# Expose the application port
EXPOSE 3002

# Start the application
CMD ["npm", "start"]
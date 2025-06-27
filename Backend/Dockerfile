# Use official Node.js base image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy all remaining backend code
COPY . .

# Optional: health check route
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]

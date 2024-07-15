# Use a single stage build for simplicity, as we're only running the app in development mode
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on, default SvelteKit dev port is 3000
EXPOSE 5173

# Command to run the application in development mode
CMD ["npm", "run", "dev"]

# Use official Node.js image with Alpine for a smaller, more efficient image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json from the stats folder
COPY stats/package.json stats/package-lock.json /app/

# Install all the dependencies from package.json
RUN npm install

# Copy the entire frontend code (everything in stats folder) to the working directory in the container
COPY stats /app

# Expose port 3000, which is the default port for React development server
EXPOSE 3000

# Start the Vite server (or React's dev server if you're using create-react-app)
CMD ["npm", "run", "dev"]

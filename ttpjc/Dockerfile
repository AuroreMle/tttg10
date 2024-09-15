# Stage 1: Build the Vue.js application
FROM node:18 AS build-stage

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Vue.js application
RUN npm run build

# Stage 2: Serve the built application using a web server
FROM nginx:stable-alpine AS production-stage

# Copy the built files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the default Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the new port Nginx will run on
EXPOSE 8081

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

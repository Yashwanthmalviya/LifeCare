# ------------ 1. Build Stage ------------
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project (for React, Vite, Vue, Angular…)
RUN npm run build



# ------------ 2. Nginx Serve Stage ------------
FROM nginx:stable-alpine

# Copy built files from previous stage to Nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

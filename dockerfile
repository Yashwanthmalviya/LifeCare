# Use Node for build and serve
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Build the Vite React app (creates dist/)
RUN npm run build

# Install serve to host static files
RUN npm install -g serve

# Expose port Render will use
EXPOSE 3000

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "3000"]

# -----------------------------
# 🔹 1. Build Stage (Node)
# -----------------------------
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy only package files first to improve caching
COPY package.json package-lock.json ./

# Install dependencies (faster & deterministic)
RUN npm ci

# Copy the remaining project files
COPY . .

# Build the production-ready app
RUN npm run build


# -----------------------------
# 🔹 2. Serve Stage (Nginx)
# -----------------------------
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

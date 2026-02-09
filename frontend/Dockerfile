############################
# 1️⃣ Build stage
############################
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# vite build -> dist/
RUN npm run build


############################
# 2️⃣ Nginx serve stage
############################
FROM nginx:alpine

# remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

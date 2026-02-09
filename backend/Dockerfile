############################
# 1️⃣ Build stage
############################
FROM node:20-alpine AS builder

WORKDIR /app

# copy deps
COPY package*.json ./
RUN npm install

# copy source
COPY . .

# compile typescript -> dist
RUN npm run build


############################
# 2️⃣ Production stage
############################
FROM node:20-alpine

WORKDIR /app

# install only prod deps
COPY package*.json ./
RUN npm install --omit=dev

# copy compiled files only
COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/server.js"]

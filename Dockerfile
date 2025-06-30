FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ build đã bao gồm prisma generate
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]

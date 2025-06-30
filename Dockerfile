FROM node:18 AS builder
WORKDIR /app

# Cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn (bao gồm schema)
COPY . .

# Chạy build (bao gồm cả prisma generate)
RUN npm run build

# ============================

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy toàn bộ file đã build từ giai đoạn builder
COPY --from=builder /app ./

# Mở port 3000
EXPOSE 3000

# ✅ Chạy migrate rồi mới khởi động app
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]

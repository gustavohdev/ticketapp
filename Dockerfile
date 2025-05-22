FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

# Install MySQL client tools
RUN apt-get update && apt-get install -y default-mysql-client

COPY . .

# 👇 Generate Prisma client during build
RUN npx prisma generate

COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "run", "dev"]


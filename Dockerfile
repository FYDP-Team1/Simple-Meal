# ---- Build Stage ----
FROM node:20-bookworm AS base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci
RUN npm rebuild bcrypt --build-from-source

HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1  # Healthcheck for the container

COPY . .

# ---- Production ----
FROM base AS production

ENV NODE_ENV production

EXPOSE 3000
EXPOSE 3001

CMD ["./start-prod.sh"]
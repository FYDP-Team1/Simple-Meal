# ---- Build Stage ----
FROM node:20-bookworm AS base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

# ---- Development ----
FROM base AS development

ENV SIMPLEMEAL_DEBUG true

CMD ["./start-dev.sh"]

# ---- Production ----
FROM base AS production

ENV SIMPLEMEAL_DEBUG false

ENV NODE_ENV production

EXPOSE 3000

CMD ["./start-prod.sh"]
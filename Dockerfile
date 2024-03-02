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

CMD ["./start-dev.sh"]
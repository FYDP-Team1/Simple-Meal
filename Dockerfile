# ---- Build Stage ----
FROM node:20-bookworm AS base

RUN apt-get update \
    && apt-get install -y --no-install-recommends dumb-init \
    && apt-get clean

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm rebuild bcrypt --build-from-source

COPY . .

# ---- Unpack Images ----
FROM base AS unpack

RUN echo "Starting unpacking images..." \
    && tar -xf recipe_images.tar -C public/recipe_images \
    && echo "Done unpacking images."

COPY --from=base /usr/bin/dumb-init /usr/bin/dumb-init

# ---- Development ----
FROM unpack AS development

ENV SIMPLEMEAL_DEBUG true

CMD ["dumb-init", "node", "server.js"]

# ---- Production ----
FROM unpack AS production

ENV SIMPLEMEAL_DEBUG false

ENV NODE_ENV production

CMD ["dumb-init", "node", "server.js"]
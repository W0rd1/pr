FROM node AS base
WORKDIR /app
COPY package*.json ./


FROM base AS development
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

FROM base AS build
RUN npm install
COPY . .
RUN npm run build

FROM node AS production
WORKDIR /app
COPY --from=build /app/dist/ ./dist
COPY server.js .
RUN npm install --only=production
CMD ["node", "server.js"]


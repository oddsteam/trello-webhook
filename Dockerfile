FROM node:16.13.0-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
RUN yarn install
RUN yarn build
# Set the timezone in docker
RUN apk --update add tzdata
RUN cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

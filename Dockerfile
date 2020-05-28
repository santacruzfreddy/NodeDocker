FROM node:10-alpine

WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# for typescript
RUN npm run build
COPY ormconfig.json ./dist/
#COPY .env ./dist/
WORKDIR ./dist

RUN pwd 
EXPOSE 3000
CMD node index.js
# install node
FROM node:18-alpine

# make the 'app' folder the current working directory
WORKDIR /usr/app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json yarn.lock ./

# install project dependencies
RUN yarn install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# serve application in development
CMD [ "yarn", "serve" ]
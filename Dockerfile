FROM 601697125460.dkr.ecr.us-east-1.amazonaws.com/ubi9/nodejs-18-minimal:v1
USER root
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY sample.env .env
RUN npm ci
RUN npm install cross-var-no-babel -g
RUN npm install babel-plugin-transform-runtime -g
RUN chown -R 996:994 "/opt/app-root/src/.npm"
USER 1001
CMD ["npm"]

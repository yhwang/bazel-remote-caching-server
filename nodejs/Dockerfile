FROM node:10.11.0-stretch

# Create directories to store cache
RUN set -ex && \
    mkdir -p /webdav/data/cas && mkdir -p /webdav/data/ac
COPY webdav /webdav

WORKDIR /webdav
RUN set -ex && npm install

VOLUME /webdav/data

CMD ["npm", "run", "start"]


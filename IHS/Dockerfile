FROM ibmcom/ibm-http-server:9.0.0.9

# Create directories to store cache
RUN set -ex && \
    mkdir -p /var/www/cache/cas && mkdir -p /var/www/cache/ac && \
    mkdir -p /var/www/cache/ac && touch /var/www/DavLock && \
    chown -R nobody:nogroup /var/www

COPY conf/httpd.conf /opt/IBM/HTTPServer/conf/

VOLUME /var/www/cache

CMD ["/work/ihsstart.sh"]

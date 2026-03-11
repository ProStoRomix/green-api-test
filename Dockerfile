FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY /usr/share/nginx/html

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY app /usr/share/nginx/html

COPY docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
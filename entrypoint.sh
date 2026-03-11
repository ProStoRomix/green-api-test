#!/bin/sh

echo "Generating config.js from template..."

envsubst < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/config.js

echo "Starting nginx..."

nginx -g "daemon off;"
#!/bin/sh

echo "setting nginx conf ..."
echo "APP_API_PLACEHOLDER": $APP_API_PLACEHOLDER
echo "APP_API_GATEWAY": $APP_API_GATEWAY

# replace env for nginx conf
envsubst '$APP_API_PLACEHOLDER $APP_API_GATEWAY' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf

# start nginx
nginx -g 'daemon off;'
exec "$@"
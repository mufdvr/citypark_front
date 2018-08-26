#!/bin/sh

echo "setting nginx conf ..."
echo "API_PLACEHOLDER": $API_PLACEHOLDER
echo "UPLOADS_PLACEHOLDER": $UPLOADS_PLACEHOLDER
echo "BACKEND_GATEWAY": $BACKEND_GATEWAY
echo "HOST": $HOST

# replace env for nginx conf
envsubst '$API_PLACEHOLDER $UPLOADS_PLACEHOLDER $BACKEND_GATEWAY $HOST' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf

# start nginx
nginx -g 'daemon off;'
exec "$@"
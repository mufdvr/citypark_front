#!/bin/sh

echo "setting nginx conf ..."
echo "FRONTEND_SERVER_NAME": $FRONTEND_SERVER_NAME
echo "BACKEND_GATEWAY": $BACKEND_GATEWAY
echo "ADMIN_GATEWAY": $ADMIN_GATEWAY
echo "API_PLACEHOLDER": $API_PLACEHOLDER
echo "ADMIN_PLACEHOLDER": $ADMIN_PLACEHOLDER
echo "UPLOADS_PLACEHOLDER": $UPLOADS_PLACEHOLDER
echo "FTP_FILES_PLACEHOLDER": $FTP_FILES_PLACEHOLDER
echo "SSL_CERTIFICATE": $SSL_CERTIFICATE
echo "SSL_CERTIFICATE_KEY": $SSL_CERTIFICATE_KEY

# replace env for nginx conf
envsubst '$ADMIN_PLACEHOLDER $FRONTEND_SERVER_NAME $ADMIN_GATEWAY $API_PLACEHOLDER $UPLOADS_PLACEHOLDER $BACKEND_GATEWAY $FTP_FILES_PLACEHOLDER $SSL_CERTIFICATE $SSL_CERTIFICATE_KEY' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# start nginx
nginx -g 'daemon off;'
exec "$@"
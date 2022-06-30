FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/my-clima /usr/share/nginx/html



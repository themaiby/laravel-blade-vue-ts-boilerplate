FROM nginx:alpine

WORKDIR /app
VOLUME ["/sys/fs/cgroup"]

RUN apk update && apk upgrade && apk add openssl haveged openrc \
    && mkdir /certs \
    && openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
       -keyout /certs/nginx-selfsigned.key -out /certs/nginx-selfsigned.crt \
       -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com"
##    && openssl dhparam -out /etc/nginx/dhparam.pem 4096

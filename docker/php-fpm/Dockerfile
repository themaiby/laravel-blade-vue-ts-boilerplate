FROM php:7.3.10-fpm-alpine3.10

WORKDIR /app

RUN apk update \
    && apk upgrade \
    && apk add  \
        bash autoconf build-base curl \
        curl-dev \
        zlib-dev \
        libzip-dev \
        libpng-dev \
        libffi-dev \
        libxml2-dev \
        postgresql-dev \
        imagemagick-dev \
        gmp-dev \
    && docker-php-ext-install \
        bcmath gd pgsql pdo_pgsql zip gmp exif pcntl \
    && pecl install -o -f imagick redis xdebug \
    && rm -rf /tmp/pear \
    && docker-php-ext-enable imagick redis xdebug \
    && php -v \
    && php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer \
    && composer global require hirak/prestissimo \
    && rm -rf /var/cache/apk/*
    && chown -R www-data:www-data /app

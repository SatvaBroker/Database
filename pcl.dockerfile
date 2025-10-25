FROM nextcloud:stable



# Copy preconfiguration for Wasabi

COPY autoconfig.php /usr/src/nextcloud/config/autoconfig.php



# Optional tuning

ENV PHP_MEMORY_LIMIT=512M
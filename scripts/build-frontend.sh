#!/usr/bin/env bash
rm -r public/js -f
rm -r /public/css -f
rm public/manifest.json -f
rm public/precache-manifest.* -f
rm public/service-worker.js -f
rm resources/views/index.blade.php -f

node_modules/.bin/vue-cli-service build --no-clean

#!/bin/bash

cd /var/www/money

# if [ ! -d /var/www/money/node_modules ]; then
  npm cache clean -f  &&  npm install
# fi;

npm run start:dev
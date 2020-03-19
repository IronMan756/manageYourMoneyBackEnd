#!/bin/bash

cd /var/www/manageyourmoney

# if [ ! -d /var/www/manageyourmoney/node_modules ]; then
  npm cache clean -f  &&  npm install
# fi;

npm run start:dev
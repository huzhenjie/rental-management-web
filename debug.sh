#!/bin/bash

pwd
ip=`ifconfig | grep 192 | awk '{print $2}'`
echo '[current ip]: ' $ip
cat .env.development.local | sed "s/VUE_APP_BASE_API.*/VUE_APP_BASE_API = http:\/\/$ip:8123/g" > .env.development.local.bak
cat .env.development.local.bak > .env.development.local
rm -rf .env.development.local.bak
npm run serve -- --port 50123

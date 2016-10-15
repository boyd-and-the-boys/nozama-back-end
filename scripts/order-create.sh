#!/bin/sh
curl --include --request POST http://localhost:3000/orders \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=oiUe6aFxU3qIcMfFaO1k4tdBeuN5biWZJHEybBCWg3c=--oO6jEjzPhCfpnhtVnIgdg4+ija1YFwVU9k6cdRZofy0=" \
  --data '{
    "order": {
      "dateOrdered": "2016-10-15",
      "isComplete": true
    }
  }'

curl --include --request POST http://localhost:3000/orders \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=oiUe6aFxU3qIcMfFaO1k4tdBeuN5biWZJHEybBCWg3c=--oO6jEjzPhCfpnhtVnIgdg4+ija1YFwVU9k6cdRZofy0=" \
  --data '{
    "order": {
      "dateOrdered": "2016-12-24",
      "isComplete": false
    }
  }'

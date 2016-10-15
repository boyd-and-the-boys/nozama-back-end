#!/bin/sh
curl --include --request POST http://localhost:3000/products \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=oiUe6aFxU3qIcMfFaO1k4tdBeuN5biWZJHEybBCWg3c=--oO6jEjzPhCfpnhtVnIgdg4+ija1YFwVU9k6cdRZofy0=" \
  --data '{
    "product": {
      "name": "The Herbinator",
      "price": 19.99
    }
  }'

curl --include --request POST http://localhost:3000/products \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=oiUe6aFxU3qIcMfFaO1k4tdBeuN5biWZJHEybBCWg3c=--oO6jEjzPhCfpnhtVnIgdg4+ija1YFwVU9k6cdRZofy0=" \
  --data '{
    "product": {
      "name": "Nuke_Pave",
      "price": 17.99
    }
  }'

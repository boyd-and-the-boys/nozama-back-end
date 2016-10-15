#!/bin/sh
curl --include --request PATCH http://localhost:3000/products/580285f7a637c55580840235 \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=4tu+a8g7FHEW362weISsmvpAve+up1ltH/ckSp+1vv0=--bM0ACUkE4wfc+ncbe3mGZIzp+N0QCvKHtiAMh4iLv6U=" \
  --data '{
    "product": {
      "name": "The Herbinator",
      "price": "29.99"
    }
  }'

#!/bin/sh
curl --include --request POST http://localhost:3000/products \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=xMA+WIScbvcDRqJLfiGptF1DbG83bmNeposwpD+qag4=--FxsJEU2/YPyvkbLTSnIeddJfXWPO//kD26tG7faJ0jQ=" \
  --data '{
    "product": {
      "name": "The Herbinator",
      "price": 19.99
    }
  }'

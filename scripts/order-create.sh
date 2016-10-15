#!/bin/sh
curl --include --request POST http://localhost:3000/orders \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=xXgPmKF0Ms/rN+ufqVh/9+zQhV3g9bKdRuEU2NAR+es=--DW/90/LG7Agrj8CLhi529+hjbn0z5m7KMrdNms0b5Io=" \
  --data '{
    "order": {
      "dateOrdered": "2016-10-15",
      "isComplete": true
    }
  }'

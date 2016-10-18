#!/bin/sh
curl --include --request POST http://localhost:3000/selected-products \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=oiUe6aFxU3qIcMfFaO1k4tdBeuN5biWZJHEybBCWg3c=--oO6jEjzPhCfpnhtVnIgdg4+ija1YFwVU9k6cdRZofy0=" \
  --data '{
    "selectedProduct": {
      "quantity": 12,
      "size": "S",
      "_order": "58029d2729b8c260078108e4",
      "_product": "58029caf29b8c260078108e2"
    }
  }'

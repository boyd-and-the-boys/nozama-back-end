#!/bin/bash

curl --include --request POST https://generic-assemblage.herokuapp.com/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "beers1@ga.com",
      "password": "genass"
    }
  }'

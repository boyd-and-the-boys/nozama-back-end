#!/bin/bash

curl --include --request PATCH http://localhost:3000/sign-up/ \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=/ykQvXzj6iV/nZLGsB8f+dN/50kFdMW18KbaGe82HAA=--ZLI5QAU34FLIPt2g872KZzfGhlnDFGEB1uIpIp9ZlVI=" \
  --data '{
    "credentials": {
      "email": "beers@alex.com",
      "password": "beers",
      "password_confirmation": "beers"
    }
  }'

curl --include --request POST http://localhost:3000/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "another@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'

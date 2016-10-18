#!/bin/bash

curl --include --request PATCH http://localhost:3000/sign-up/ \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=g/VGSgz3lHH9uv1MTXS8XAm5BUnFGdyTGGjdoltDhDU=--eefSXN3pV7PjGjMrS6R6SVXHFYI02x8WJWWFRmh7kiA=" \
  --data '{
    "credentials": {
      "email": "beers1@alex.com",
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

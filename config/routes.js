'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#createguestuser')
.patch('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.resources('users', { only: ['index', 'show', 'destroy'] })

.get('/products', 'index#products')
.resources('orders')
.resources('selected-products')
.get('/my-orders', 'orders#userorders')
.get('/my-shopping-cart', 'orders#incompleteorders')
.get('/order-products', 'selected-products#orderproducts')

// all routes created
;

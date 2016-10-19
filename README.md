Welcome to Genèric Assemblage, a artisanal fashion-forward boutique specializing
in the finest apparel associated with WDI 14. Perfect for staying in or for a
swinging night out on the town, these beautifully crafted garments are sure to
dazzle and delight all the lucky souls who lay eyes upon you!

API

User Authentication
| Verb    | URI Pattern           | Controller#Action       |
|:-------:|:---------------------:|:-----------------------:|
| POST    | `/sign-up`            | `users#createguestuser` |
| PATCH   | `/sign-up`            | `users#signup`          |
| POST    | `/sign-in`            | `users#signin`          |
| DELETE  | `/sign-out/:id`       |  `users#signout`        |
| PATCH   | `/change-password/:id`|  `users#changepw`       |

Products
| Verb    | URI Pattern           | Controller#Action       |
|:-------:|:---------------------:|:-----------------------:|
| POST    | `/products`           | `products#index`        |
| PATCH   | `/products/:id`       | `products#show`         |
| POST    | `/products`           | `products#create`       |
| DELETE  | `/products/:id`       | `products#update`       |
| PATCH   | `/products/:id`       | `products#destroy`      |

Orders
| Verb    | URI Pattern           | Controller#Action       |
|:-------:|:---------------------:|:-----------------------:|
| POST    | `/orders`             | `orders#index`          |
| PATCH   | `/orders/:id`         | `orders#show`           |
| POST    | `/orders`             | `orders#create`         |
| DELETE  | `/orders/:id`         | `orders#update`         |
| PATCH   | `/orders/:id`         | `orders#destroy`        |

Selected Products
| Verb    | URI Pattern             | Controller#Action           |
|:-------:|:-----------------------:|:---------------------------:|
| POST    | `/selected-products`    | `selected-products#index`   |
| PATCH   | `/selected-products/:id`| `selected-products#show`    |
| POST    | `/selected-products`    | `selected-products#create`  |
| DELETE  | `/selected-products/:id`| `selected-products#update`  |
| PATCH   | `/selected-products/:id`| `selected-products#destroy` |

Custom Routes
| Verb    | URI Pattern         | Controller#Action                 |
|:-------:|:-------------------:|:---------------------------------:|
| GET     | `/my-orders`        | `orders#userorders`               |
| GET     | `/my-shopping-cart` | `orders#incompleteorders`         |
| GET     | `/order-products`   | `selected-products#orderproducts` |

Collaborators: Alex Beers, Jen Boyd and Ben Morse

Deployed back-end: https://generic-assemblage.herokuapp.com
Front-end repo: https://github.com/boyd-and-the-boys/nozama-front-end/tree/development

dynamic-api-server 
# Dynamic API Server Using Express

## Author: Bushra Bilal

## Links and Resourcs:

- [Lab 07 PR](https://github.com/bushra-401-advanced-javascript/dynamic-api-server/pull/1)
- [Lab 08 PR](https://github.com/bushra-401-advanced-javascript/dynamic-api-server/pull/2)
- [Lab 09 PR](https://github.com/bushra-401-advanced-javascript/dynamic-api-server/pull/3)


## Setup:
- Enviroument Variables:
  - PORT = 3000
  - MONGODB_URI = 'mongodb://localhost:27017/<db_name>'

## How to run the application:
- clone the app repo
- run the command `npm i`
- to start the server, run the command: `node index.js`  
or you can run : `nodemon`
- routes definitions:
  - `/api/v1/categories`
  - `/api/v1/products`
  - `/api/v1/categories/id`
  - `/api/v1/products/id`
- apply REST operations (replace `<model>` with `categories` or `products`):
  - to get all categories/products:  
    GET - `http://localhost:3000/api/v1/<model>`  

  - to get a specific category/product by id:  
    GET - `http://localhost:3000/api/v1/<model>/5ed6831b57ba327daa8508725ee5ba56f68ec90f1ea15e30`
 
  - to add a category/product:  
    POST - `http://localhost:3000/api/v1/<model>`  

  - to update a category/product:
    PUT/PATCH - `http://localhost:3000/api/v1/<model>/5ed6831b57ba327daa8508725ee5ba56f68ec90f1ea15e30`

  - to delete a category/product:
    DELETE - `http://localhost:3000/api/v1/<model>/5ed6831b57ba327daa8508725ee5ba56f68ec90f1ea15e30`


## UML
![uml](assets\lab09-uml.jpg)
  

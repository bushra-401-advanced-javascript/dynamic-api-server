'use strict';

/*
* create `routes` for 
  - `categories`
  - `products`

    ** handle data with an in-memory database (array/objects)
    ** define CRUD routes to handle requests for 
    - `categories`
    - `products`
       using the in-memory DB:
        - app.post('/products', (req, res) => {}) … uses the object in the body of the request to create a new “record”
        - app.get('/products', (req, res) => {})
        - app.get('/products/:id', (req, res) => {})
        - app.put('/products/:id', (req, res) => {}) … uses the object in the body to replace the record with the :id specified
        - app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified
        - … and repeat for categories
*/
/////////////////////////////////////////

//reqiure 
const express = require('express');
const app = express();
/////////////////////////////////////////

//global middileware
app.use(express.json());
/////////////////////////////////////////

//handle any route '/'
app.get('/', (req, res) => {
  res.status(200).send('Welcome! API server running..');
});
///////////////////////////////////////////

//// Products: ////
//>>>>>>>>>>>>>>>>

//in-memory db -- to store the records
let products_db = [];
/*product record schema: 
    {
        name: product_name,
        display_name: product_display_name,
        description: product_description,
        category: product_category,
        id: product_id
    }
*/

//route definitions
///POST route -- uses the object in the body of the request to create a new “record”
app.post('/products', (req, res) => {
  let productRecord = {
    name: req.body.name, 
    display_name: req.body.display_name, 
    description: req.body.description, 
    category: req.body.category,
    id: products_db.length + 1,
  };
  products_db.push(productRecord);
  res.status(200).json(productRecord);
});

///GET routes
app.get('/products', (req, res) => {
  res.status(200).json(products_db);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  let productWithId;
  products_db.forEach( product => {
    if (product.id == id) {
      productWithId = product;
    }
  });
  res.status(200).json(productWithId);
});

///PUT rout -- uses the object in the body to replace the record with the :id specified
app.put('/products/:id', (req, res) => {
//   const id = req.params.id;
  let newRecord = {
    name: req.body.name, 
    display_name: req.body.display_name, 
    description: req.body.description, 
    category: req.body.category,
    id: req.params.id,
  };
  products_db.forEach( product => {
    if (product.id == newRecord.id) {
      product = newRecord;
      res.status(200).json(product);
    }
    res.send('Product does not exist..');
  });
});

///DELETE route -- deletes the record with the :id specified
app.delete('/products/:id', (req, res) => {
  const id = req.params.id;
  products_db.forEach( product => {
    if (product.id == id) {
      products_db.pop(product);
      res.json(products_db);
    }
  });
});

///////////////////////////////////////////

//// Categories: ////
//>>>>>>>>>>>>>>>>>>

//in-memory db -- to store the records
let categories_db = [];
/*category record schema: 
    {
        name: category_name,
        display_name: category_display_name,
        description: category_description,
        id: product_id
    }
*/

//route definitions
///POST route -- uses the object in the body of the request to create a new “record”
app.post('/categories', (req, res) => {
  let categoryRecord = {
    name: req.body.name, 
    display_name: req.body.display_name, 
    description: req.body.description, 
    id: categories_db.length + 1,
  };
  products_db.push(categoryRecord);
  res.status(200).json(categoryRecord);
});

///GET routes
app.get('/categories', (req, res) => {
  res.status(200).json(categories_db);
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  let categoryWithId;
  categories_db.forEach( category => {
    if (category.id == id) {
      categoryWithId = category;
    }
  });
  res.status(200).json(categoryWithId);
});

///PUT rout -- uses the object in the body to replace the record with the :id specified
app.put('/categories/:id', (req, res) => {
  let newRecord = {
    name: req.body.name, 
    display_name: req.body.display_name, 
    description: req.body.description, 
    id: req.params.id,
  };
  categories_db.forEach( category => {
    if (product.id == newRecord.id) {
      category = newRecord;
      res.status(200).json(category);
    }
    res.send('Category does not exist..');
  });
});

///DELETE route -- deletes the record with the :id specified
app.delete('/categories/:id', (req, res) => {
  const id = req.params.id;
  categories_db.forEach( category => {
    if (product.id == id) {
      categories_db.pop(category);
      res.json(categories_db);
    }
  });
});



///////////////////////////////////////////
/*export an object with a start() method to start the server*/ 
///////////////////////////////////////////
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => { console.log(`Listening on Port: ${PORT}`);});
  },
};

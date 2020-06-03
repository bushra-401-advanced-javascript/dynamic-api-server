'use strict';

//require
const express = require('express');
const router = express.Router();
const productModel = require('../lib/models/products/products.collection');

//route definitions
router.post('/products', postProductsHandler);
router.get('/products', getProductsHandler);
router.get('/products/:id', getByIdHandler);
router.put('/products/:id', putProductHandler);
router.delete('/products/:id', deleteProductHandler);

//route handlers
function postProductsHandler(req, res, next) {
  productModel.create(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function getProductsHandler(req, res, next) {
  productModel.read()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getByIdHandler(req, res, next) {
  productModel.read(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function putProductHandler(req, res, next) {
  productModel.update(req.params.id, req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function deleteProductHandler(req, res, next) {
  productModel.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;

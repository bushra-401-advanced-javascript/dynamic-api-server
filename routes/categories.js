'use strict';

//require
const express = require('express');
const router = express.Router();
const categoryModel = require('../lib/models/categories/categories.collection');

//route definitions
router.post('/categories', postCategoryHandler);
router.get('/categories', getCategoriesHandler);
router.get('/categories/:id', getByIdHandler);
router.put('/categories/:id', putCategoryHandler);
router.delete('/categories/:id', deleteCategoryHandler);

//route handlers
function postCategoryHandler(req, res, next) {
    categoryModel.create(req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function getCategoriesHandler(req, res, next) {
    categoryModel.read()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function getByIdHandler(req, res, next) {
    categoryModel.read(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function putCategoryHandler(req, res, next) {
    categoryModel.update(req.params.id, req.body)
    .then(data => {
      res.status(201).json(data);
    })
    .catch(next);
}

function deleteCategoryHandler(req, res, next) {
    categoryModel.delete(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
'use strict';

const express = require('express');
const router = express.Router();
const modelFinder = require('../../middleware/model-finder');

router.param('model', modelFinder);

//route definitons
////get routes
router.get('/api/v1/:model', handleGetAll); //get all
router.get('/api/v1/:model/:id', handleGetOne); //get by id
////post route
router.post('/api/v1/:model', handlePost);
////put route
router.put('/api/v1/:model/:id', handlePut);
////delete route
router.delete('/api/v1/:model/:id', handleDelete);

//reoute habdlers
function handleGetAll(req, res, next){
  req.model.read()
    .then(data =>{
      let results ={
        count : data.length ,
        result : data,
      };
      res.status(200).send(results);
    })
    .catch(next);
}

function handleGetOne(req, res, next){
  req.model.read(req.params.id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(next);
}

function handlePost(req, res ,next) {
  req.model.create(req.body)
    .then(data => {
      res.status(201).json(data); 
    })
    .catch(next); 
}

function handlePut(req, res ,next) {
  req.model.update(req.params.id, req.body)
    .then(data =>{
      res.status(201).send(data); 
    })
    .catch(next);
}

function handleDelete(req, res, next) {
  req.model.delete(req.params.id)
    .then(data =>{
      res.status(200).send(data);
    })
    .catch(next);
}

module.exports = router;

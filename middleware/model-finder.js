'use strict';

function getModel(req, res, next) {
  let model = req.params.model;
  let dynamicModel = require(`../lib/models/${model}/${model}-model`);
  
  switch(model) {
  case 'categories':
  case 'products':
    req.model = dynamicModel;
    next();
    return;
  default:
    next('Invalid Model!');
    return;
  }
}
  
module.exports = getModel;

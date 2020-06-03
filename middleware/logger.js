'use strict';

function logger(req, res, next) {
  console.log(`\n*Request Path: ${req.path}\n*Request Method: ${req.method}\n*Request Time: ${req.requestTime}\n`);
  next();
}

module.exports = logger;

'use strict';

function serverErrorHandler(err, req, res, next) {
  res.status(500);
  res.send({error: err});
}

module.exports = serverErrorHandler;

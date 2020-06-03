'use stricit';

function notFoundErrorHandler(req, res, next) {
  res.status(404);
  res.send({error: 'Error 404 - Not Found!'});
}

module.exports = notFoundErrorHandler;

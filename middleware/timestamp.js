'use strict';

function timestamp(req, res, next) {
  const currentDate = new Date();
  const cuurentTimestamp = currentDate.toLocaleDateString();
  req.requestTime = cuurentTimestamp;
  next();
}

module.exports = timestamp;
'use strict';

function timestamp(req, res, next) {
  const currentDate = new Date();
  const cuurentTimestamp = currentDate.toLocaleDateString();
  req.requestTime = currentDate;
  next();
}

module.exports = timestamp;
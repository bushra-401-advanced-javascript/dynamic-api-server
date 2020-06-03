'use strict';

//require
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server');

//connecting to mongoDB
const mongooseOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
  .then(console.log('\n*mongoDB connected*\n'));

/*call the .start() method from 
the server with the PORT set in your environment*/
server.start(process.env.PORT);

'use strict';

//require
require('dotenv').config();
const server = require('./lib/server');

/*call the .start() method from 
the server with the PORT set in your environment*/
const PORT = process.env.PORT;
server.start(PORT);

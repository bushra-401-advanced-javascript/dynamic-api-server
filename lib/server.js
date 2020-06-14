'use strict';

//reqiure 
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const apiRouter = require('./routes/api-v1');

//middleware
const notFoundError = require('../middleware/404');
const serverSideError = require('../middleware/500');
/////////////////////////////////////////

//global middileware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
/////////////////////////////////////////

//handle routes 
app.get('/', (req, res) => {
  res.status(200).send('Welcome! API server running..');
});

app.use(apiRouter);
///////////////////////////////////////////


//handle errors
///404 errors
app.use('*', notFoundError);
///500 errors
app.use(serverSideError);

///////////////////////////////////////////
/*export an object with a start() method to start the server*/ 
///////////////////////////////////////////
module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || 3000;
    app.listen(PORT, () => { console.log(`Listening on Port: ${PORT}`);});
  },
};

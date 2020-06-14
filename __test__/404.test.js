'use strict';


const {server} = require('../lib/server');
const supertest = require('supertest');
const serverMock = supertest(server);

describe('404 middleware module', ()=>{
  it('response with status 404', ()=>{
    return serverMock.get('/anyRoute')
      .then((result) =>{
        expect(result.status).toBe(404);
      });
  });
  it('response with status 404',() =>{
    return serverMock.delete('/anyRoute/4das56f465as')
      .then((result) =>{
        expect(result.status).toBe(404);
      });
  });
  it('response with status 404', ()=>{
    return serverMock.put('/anyRoute/dasda5s4154')
      .then((result) =>{
        expect(result.status).toBe(404);
      });
  });
  it('response with status 404', ()=>{
    return serverMock.post('/anyRoute')
      .then((result)=>{
        expect(result.status).toBe(404);
      });
  });
});
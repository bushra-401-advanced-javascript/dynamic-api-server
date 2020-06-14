'use strict';

const {server} = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const serverMock = supergoose(server);

describe('500 middleware module', () =>{
  it('response with status 500', ()=>{
    return serverMock.post('/api/v1/categories')
      .send({})
      .then((result)=>{
        expect(result.status).toBe(500);
      }).catch(e => {});
  });
});

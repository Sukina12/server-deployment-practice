'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API Server', () => {
  it ('correct routes handeling', async () => {
    const response = await request.get('/');
    expect (response.status).toEqual(200);
  });

  it ('error handeling', async () => {
    const response = await request.get ('/bad');
    expect (response.status).toEqual (500);
  });
  
  it('invalid requests handeling', async () => {
    const response = await request.get('/foo');
    expect (response.status).toEqual (404);
  });
});


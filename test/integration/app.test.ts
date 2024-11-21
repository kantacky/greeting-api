import request from 'supertest';
import { app, server } from '../../src/server';

describe('App', () => {
  afterAll((done) => {
    server.close();
    done();
  });

  it('Starts and has the proper test environment', async () => {
    expect(process.env.NODE_ENV).toBe('test');
    expect(app).toBeDefined();
  }, 10000);

  it('Returns all options allowed when called from the HTTP method options', async () => {
    const res = await request(app).options('/');
    expect(res.status).toBe(200);
    expect(res.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
  }, 10000);

  it('Returns 404 when the route requested is not found.', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(404);
  }, 10000);
});

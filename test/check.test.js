
import request from 'supertest';
import app from '../src/app.js';
import mockAxios from 'jest-mock-axios';

test('checks google.com successfully', async () => {
  mockAxios.get.mockResolvedValue({ status: 200 });
  
  const res = await request(app)
    .post('/check-url')
    .send({ url: 'https://google.com' });

  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe(200);
});

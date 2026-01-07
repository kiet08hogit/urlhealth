
import request from 'supertest';
import app from '../src/app.js';



test('checks google.com successfully', async () => {
  const res = await request(app)
    .post('/check-url')
    .send({ url: 'https://google.com' });

  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe(200);
});

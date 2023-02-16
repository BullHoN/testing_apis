const request = require('supertest');
const app = require('./app');

describe('Todos', () => {
  it('GET /todos ---> array todos', () => {
    return request(app)
      .get('/todos')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: expect.any(String),
              completed: expect.any(Boolean),
            }),
          ])
        );
      });
  });

  it('GET /todos/id ---> specify todos by id', () => {
    return request(app)
      .get('/todos/1')
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            completed: expect.any(Boolean),
          })
        );
      });
  });

  it('GET /todos/id ---> 404 not found', () => {
    return request(app).get('/todos/2124').expect(404);
  });

  it('POST /todos ---> created todo', () => {
    return request(app)
      .post('/todos')
      .send({
        name: 'watch movie',
      })
      .expect(201, {
        name: 'watch movie',
        completed: false,
      });
  });
});

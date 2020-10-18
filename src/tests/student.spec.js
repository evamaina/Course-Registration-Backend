/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import app from '../app';

const request = require('supertest');
const assert = require('assert');

// const app = require('../app');

describe('GET /students', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/api/students')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  it('returns a list of students', (done) => {
    request(app)
      .get('/api/students')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, { body }) => {
        assert(body.length, 6);
        // console.log(body[6]);
        done();
      });
  });

  it('returns a 404 error for an invalid url path', (done) => {
    request(app)
      .get('/nonexistenturl')
      .set('Accept', 'application/json')
      .expect(404, done);
  });
});

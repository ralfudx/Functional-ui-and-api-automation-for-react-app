import request from 'supertest';
import {
  validUser,
  newUser,
  existingUser,
  message,
  inValidUser,
  existingCourse1,
  existingCourse2,
  existingCourse3,
  newCourse,
  updatedCourse,
  incompleteCourse,
} from '../test_data/users';

const app = 'http://localhost:5050/api';

describe('API Tests', () => {
  it('POST /users - create new user', async () => {
    const res = await request(app).post('/users').send(newUser);
    expect(res.statusCode).toBe(201);
  });

  it('POST /users - create new user with existing email', async () => {
    const res = await request(app).post('/users').send(existingUser);
    expect(res.statusCode).toBe(400);
    expect(res.text).toContain(message.existingUser);
  });

  it('GET /users - login authenticated user', async () => {
    const res = await request(app)
      .get('/users')
      .auth(validUser.username, validUser.password);
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain(validUser.username);
  });

  it('GET /users - login unauthenticated user', async () => {
    const res = await request(app)
      .get('/users')
      .auth(inValidUser.username, inValidUser.password);
    expect(res.statusCode).toBe(401);
    expect(res.text).toContain(message.unAuthUser);
  });

  it('GET /courses - retrieve all courses', async () => {
    const res = await request(app).get('/courses');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain(existingCourse1.title);
    expect(res.text).toContain(existingCourse2.title);
    expect(res.text).toContain(existingCourse3.title);
  });

  it('GET /courses/:id - retrieve course with valid id', async () => {
    const res = await request(app).get('/courses/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(existingCourse1);
  });

  it('GET /courses/:id - retrieve course with invalid id', async () => {
    const res = await request(app).get('/courses/10');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain(message.noCourseFound);
  });

  it('POST /courses - create new course', async () => {
    const res = await request(app)
      .post('/courses')
      .auth(validUser.username, validUser.password)
      .send(newCourse);
    expect(res.statusCode).toBe(201);
    const res2 = await request(app).get('/courses');
    expect(res2.statusCode).toBe(200);
    expect(res2.text).toContain(newCourse.title);
  });

  it('PUT /courses/:id - update existing course while authorized', async () => {
    const res = await request(app)
      .put('/courses/5')
      .auth(validUser.username, validUser.password)
      .send(updatedCourse);
    expect(res.statusCode).toBe(204);
    const res2 = await request(app).get('/courses');
    expect(res2.statusCode).toBe(200);
    expect(res2.text).toContain(updatedCourse.title);
  });

  it('PUT /courses/:id - update existing course without authentication', async () => {
    const res = await request(app).put('/courses/5').send(incompleteCourse);
    expect(res.statusCode).toBe(401);
    expect(res.text).toContain(message.unAuthUser);
  });

  it('PUT /courses/:id - update existing course when not authorized', async () => {
    const res = await request(app)
      .put('/courses/3')
      .auth(validUser.username, validUser.password)
      .send(updatedCourse);
    expect(res.statusCode).toBe(403);
    expect(res.text).toContain(message.notAuthorisedToUpdate);
  });

  it('PUT /courses/:id - update existing course with insufficient data', async () => {
    const res = await request(app)
      .put('/courses/5')
      .auth(validUser.username, validUser.password)
      .send(incompleteCourse);
    expect(res.statusCode).toBe(400);
    expect(res.text).toContain(message.inSufficientData);
  });

  it('DELETE /courses/:id - delete existing course while authorized', async () => {
    const res = await request(app)
      .del('/courses/5')
      .auth(validUser.username, validUser.password);
    expect(res.statusCode).toBe(204);
    const res2 = await request(app).get('/courses/5');
    expect(res2.statusCode).toBe(200);
    expect(res2.text).toContain(message.noCourseFound);
  });

  it('DELETE /courses/:id - delete existing course without authentication', async () => {
    const res = await request(app).del('/courses/5');
    expect(res.statusCode).toBe(401);
    expect(res.text).toContain(message.unAuthUser);
  });

  it('DELETE /courses/:id - delete existing course when not authorized', async () => {
    const res = await request(app)
      .del('/courses/3')
      .auth(validUser.username, validUser.password);
    expect(res.statusCode).toBe(403);
    expect(res.text).toContain(message.notAuthorisedToDelete);
  });
});

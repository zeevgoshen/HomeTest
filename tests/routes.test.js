const request = require('supertest')
const app = require('../app')


describe("GET /user/1 ", () => {
  test("It should respond with a user", async () => {
    const response = await request(app).get("/user/1");
    expect(response.body).toEqual([
      {
          "id": 1,
          "email": "test@user.com",
          "password": "ourfirstpassword",
          "created_at": "2022-05-11T17:35:25.000Z"
      }
  ]);
    expect(response.statusCode).toBe(200);
  });
});
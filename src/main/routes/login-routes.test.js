const request = require('supertest')
const app = require('../config/app')
const bcrypt = require('bcrypt')
const MongoHelper = require('../../infra/helpers/mongo-helper')
let db

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect()
    db = MongoHelper.db
  })
  beforeEach(async () => {
    await MongoHelper.clearData('user')
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return 200 when valid credentials are provided', async () => {
    await db.collection('users').insertOne({
      email: 'valid_email@mail.com',
      password: bcrypt.hashSync('hashed_password', 10)
    })
    await request(app)
      .post('/api/login')
      .send({
        email: 'valid_email@mail.com',
        password: 'hashed_password'
      })
      .expect(200)
  })
})

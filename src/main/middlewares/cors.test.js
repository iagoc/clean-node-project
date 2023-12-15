const request = require('supertest')
const app = require('../config/app')

describe('App', () => {
  test('Should enable CORS', async () => {
    app.get('/test-cors', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_cors')
    expect(res.headers['access-control-alow-origin']).toBe('*')
    expect(res.headers['access-control-alow-methods']).toBe('*')
    expect(res.headers['access-control-alow-headers']).toBe('*')
  })
})

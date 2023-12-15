const request = require('supertest')
const app = require('./app')

describe('App', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test_x_powered-by', (req, res) => {
      res.send('')
    })
    const res = await request(app).get('/test_x_powered_by')
    expect(res.headers['x-powered-by']).toBeUndefined()
  })

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

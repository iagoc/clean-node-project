module.exports = app => {
  app.disable('x-powered-by')
  app.use((req, res, next) => {
    res.set('access-control-alow-origin', '*')
    res.set('access-control-alow-methods', '*')
    res.set('access-control-alow-headers', '*')
    next()
  })
}

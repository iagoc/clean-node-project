module.exports = (req, res, next) => {
  res.set('access-control-alow-origin', '*')
  res.set('access-control-alow-methods', '*')
  res.set('access-control-alow-headers', '*')
  next()
}

const cors = require('../middlewares/cors')
const jsonParser = require('../middlewares/json-parser')
const contentType = require('../middlewares/content-type')
const setupRoutes = require('./routes')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
  app.use(jsonParser)
  app.use(contentType)
  app.use(setupRoutes)
}

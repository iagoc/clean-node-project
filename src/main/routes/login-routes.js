const loginRouter = require('../composers/login-router-composer')
const ExpressRouterAdpter = require('../adapters/express-router-adapter')
module.exports = async router => {
  router.post('/login', ExpressRouterAdpter.adapt(loginRouter))
}

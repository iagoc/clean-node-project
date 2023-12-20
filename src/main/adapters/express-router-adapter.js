module.exports = class expressRouterAdpter {
  static adapt (router) {
    return async (req, res) => {
      const httpRequest = {
        body: req.body
      }
      const httpRespose = await router.route(httpRequest)
      res.status(httpRespose.statusCode).json(httpRespose.body)
    }
  }
}

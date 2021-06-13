const ApiError = require('../common/error/ApiError')

class UserController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.badRequest("There is not id-param. Id is required!"))
    }
    res.json(id)
  }
}

module.exports = new UserController()

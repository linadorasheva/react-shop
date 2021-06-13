const ApiError = require('../common/error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role}, process.env.SECRET_KEY, { expiresIn: '24' })
}

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if (!email || !password) {
      return next(ApiError.badRequest('Email or password is not valid'))
    }
    const candidate = await User.findOne({where: { email }})
    if (candidate) {
      return next(ApiError.badRequest('The user with this email already exists'))
    }

    const hashPassword= await bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password: hashPassword })
    const basket = await Basket.create({ userId: user.id })
    const token = generateJwt(user.id, email, role)

    return res.json({ token })
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

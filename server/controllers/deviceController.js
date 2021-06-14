const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../common/error/ApiError')

class DeviceController {
  async create(req, res, next) {
    try {
      let {name, price, typeId, brandId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + '.jpg'
      await img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const device = await Device.create({name, price, typeId, brandId, img: fileName})

      if (info) {
        info = JSON.parse(info);
        info.forEach(item => {
          DeviceInfo.create({
            title: item.title,
            description: item.description,
            deviceId: device.id
          })
        })
      }

      return res.json({ device })
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit = 9, page = 1} = req.query

    let offset = page * limit - limit

    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset })
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({where: { brandId }})
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({where: { typeId }})
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({where: { brandId, typeId }})
    }

    return res.json(devices);
  }

  async getDevice(req, res, next) {
    const {id} = req.params
    if (!id) {
      return next(ApiError.badRequest("There is not id-param. Id is required!"))
    }
    const device = await Device.findOne({
      where: {id},
      include: [{ model: DeviceInfo, as: 'info' }]
    })

    return res.json(device)
  }
}

module.exports = new DeviceController()

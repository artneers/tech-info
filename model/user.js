const mongoose = require('mongoose')
const joi = require('joi')
const config = require('../config')
const jwt = require('jsonwebtoken')
joi.objectId = require('joi-objectid')(joi)

// 定义 user 的结构
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024,
  }
})

userSchema.methods.generateToken = function () {
  return jwt.sign({
    _id: this._id
  }, config.jwtPrivateKey)
}

// 创建 model
const User = mongoose.model('User', userSchema)

// 创建内容校验规则对象
function userValidator (data) {
  const schema = joi.object({
    email: joi.string().email().trim().lowercase().required().messages({
      'any.required': '缺少必选参数 email',
      'string.email': 'email 格式错误'
    })
    ,
    name: joi.string().min(2).max(50).messages({
      'string.base': 'name 必须为 String',
      'string.max': 'name 最多 50 个字符',
      'string.min': 'name 最少 2 个 字符'
    }),
    password: joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).exist().messages({
      'string.pattern.base': '密码不符合规则',
      'any.required': '缺少必选参数 password'
    }),
    _id: joi.objectId()
  })
  return schema.validate(data)
}

// 导出
module.exports = {
  User,
  userValidator
}
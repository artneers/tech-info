const mongoose = require('mongoose')
const joi = require('joi')
const Joi = require('joi')

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
    maxlength: 50,
  }
})

// 创建 model
const User = mongoose.model('User', userSchema)

// 创建内容校验规则对象
function userValidator (data) {
  const schema = joi.object({
    email: joi.string().email().trim().lowercase().required(),
    name: joi.string().min(2).max(50),
    password: joi.string().pattern(/^[a-zA-Z0-9]{6,12}$/).exist()
  })
  return schema.validate(data)
}

// 导出
module.exports = {
  User,
  userValidator
}
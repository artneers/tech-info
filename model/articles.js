const mongoose = require('mongoose')
const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  content: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 200
  },
  status: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

// 创建model
const Article = mongoose.model('article', articleSchema)

// 创建校验函数
function articleValidator(data) {
  const schema = joi.object({
    title: joi.string().min(2).max(50).required().messages({
      'string.base': 'name 必须为 string',
      'string.min': '必须大于 2 个字符',
      'string.max': '必须小于 50 个字符',
      'any.required': '缺少必选参数 title'
    }),
    content: joi.string().min(2).max(200).required().messages({
      'string.base': 'name 必须为 string',
      'string.min': '必须大于 2 个字符',
      'string.max': '必须小于 200 个字符',
      'any.required': '缺少必选参数 content'
    }),
    status: joi.string().valid('published', 'drafted', 'trashed').required().messages({
      'string.base': 'name 必须为 string',
      'any.required': '缺少必选参数 status',
      'any.only': 'valid 取值有误, 可选值为 published、drafted、trashed'
    }),
    category: joi.objectId().required().messages({
      'string.pattern.name': 'category格式有误, 应为 ObjectId 格式',
      'any.required': '缺少必选参数 category'
    })
  })
  return schema.validate(data)
}

module.exports = {
  Article,
  articleValidator
}
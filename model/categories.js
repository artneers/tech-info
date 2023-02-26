const mongoose = require('mongoose')
const joi = require('joi')

// 定义分类的结构
const categorySchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: true,
    minlength: 2,
    maxlength: 50
  }
})

// 创建 model
const Category =  mongoose.model('category', categorySchema)

// 定义检验函数
function categoryValidator(data) {
  const schema = joi.object({
    name: joi.string().min(2).max(50).required().messages({
      'string.base': 'name 必须为string',
      'string.min': '必须大于 2 个字符',
      'string.max': '必须小于 50 个字符',
      'any.required': '缺少必选参数 name'
    })
  })
  return schema.validate(data)
}


module.exports = {
  Category,
  categoryValidator
}

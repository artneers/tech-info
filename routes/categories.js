const router = require('express').Router()
const { categoryValidator } = require('../model/categories')
const validator = require('../middleware/validate')

const categories = require('../controller/categories')

// 获取全部分类
router.get('/', categories.getAll)

// 获取某个分类
router.get('/:cid', categories.get)

// 添加新的分类
router.post('/', validator(categoryValidator), categories.create)

// 编辑某个分类
router.put('/:cid', validator(categoryValidator), categories.update)

// 删除某个分类
router.delete('/:cid', categories.remove)

module.exports = router
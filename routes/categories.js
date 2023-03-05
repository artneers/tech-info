const router = require('express').Router()
const { categoryValidator } = require('../model/categories')
const validator = require('../middleware/validate')
const auth = require('../middleware/auth')

const categories = require('../controller/categories')

// 获取全部分类
router.get('/', auth, categories.getAll)

// 获取某个分类
router.get('/:cid', auth, categories.get)

// 添加新的分类
router.post('/', [auth, validator(categoryValidator)], categories.create)

// 编辑某个分类
router.put('/:cid', [auth, validator(categoryValidator)], categories.update)

// 删除某个分类
router.delete('/:cid', auth, categories.remove)

module.exports = router
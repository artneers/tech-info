const router = require('express').Router()

const validator = require('../middleware/validate')
const auth = require('../middleware/auth')
const { articleValidator } = require('../model/articles')
const articles = require('../controller/articles')
// 获取全部
// 如需获取某个分类下的所有文章，通过参数传递条件即可
router.get('/', auth, articles.getAll)

// 获取某个
router.get('/:articleId', auth, articles.get)

// 添加文章
router.post('/', [auth, validator(articleValidator)], articles.create)

// 编辑某篇文章
router.put('/:articleId', [auth, validator(articleValidator)], articles.update)

// 删除某篇文章
router.delete('/:articleId', auth, articles.remove)

module.exports = router
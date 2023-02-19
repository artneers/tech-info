const router = require('express').Router()

// 获取全部
// 如需获取某个分类下的所有文章，通过参数传递条件即可
router.get('/', (req, res, next) => {
  res.send('获取全部文章')
})

// 获取某个
router.get('/:articleId', (req, res, next) => {
  res.send('获取某篇文章')
})

// 添加文章
router.post('/', (req, res, next) => {
  res.send('添加新的文章')
})

// 编辑某篇文章
router.put('/:articleId', (req, res, next) => {
  res.send('编辑某篇文章')
})

// 删除某篇文章
router.delete('/:articleId', (req, res, next) => {
  res.send('删除某篇文章')
})

module.exports = router
const router = require('express').Router()

// 获取全部分类
router.get('/', (req, res, next) => {
  res.send('获取全部分类')
})

// 获取某个分类
router.get('/:cid', (req, res, next) => {
  res.send('获取某个分类')
})

// 添加新的分类
router.post('/', (req, res, next) => {
  res.send('添加新的分类')
})

// 编辑某个分类
router.put('/:cid', (req, res, next) => {
  res.send('编辑新的分类')
})

// 删除某个分类
router.delete('/:cid', (req, res, next) => {
  res.send('删除某个分类')
})

module.exports = router
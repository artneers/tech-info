const router = require('express').Router()

// 注册用户
router.post('/', (req, res, next) => {
  res.send('注册')
})

// 获取用户
router.get('/', (req, res, next) => {
  res.send('获取用户')
})

// 编辑用户
router.put('/', (req, res, next) => {
  res.send('编辑用户')
})

// 刪除用户
router.delete('/', (req, res, next) => {
  res.send('刪除用户')
})

module.exports = router
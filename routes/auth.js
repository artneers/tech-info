const router = require('express').Router()

router.post('/', (req, res, next) => {
  res.send('登录')
})

module.exports = router
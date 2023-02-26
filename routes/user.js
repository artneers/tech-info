const router = require('express').Router()

const { userValidator } = require('../model/user')
const validator = require('../middleware/validate')

const user = require('../controller/user')

// 注册用户
router.post('/', validator(userValidator), user.register)

// 获取用户
router.get('/', user.getInfo)

// 编辑用户
router.put('/', user.updateInfo)

// 刪除用户
router.delete('/', user.deleteUser)

module.exports = router
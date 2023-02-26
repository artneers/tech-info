const router = require('express').Router()
const auth = require('../controller/auth')

router.post('/', auth.test)

module.exports = router
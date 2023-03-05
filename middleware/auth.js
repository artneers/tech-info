const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = function (req, res, next) {
  // 接口鉴权(约定，前端请求头中包含有效的 authorization 字段, 值为access_token)
  const access_token = req.header('authorization')
  // access_token 不存在，返回401
  if (!access_token) {
    return res.status(401).json({
      code: 401,
      msg: 'Unauthorized, 无有效token'
    })
  }

  try {
    // access_token存在但无效
    const userData = jwt.verify(access_token, config.jwtPrivateKey)
    req.userData = userData
    next()
  } catch(err) {
    return res.status(401).json({
      code: 401,
      msg: 'Unauthorized, 无有效token'
    })
  }
}
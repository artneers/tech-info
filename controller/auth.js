const { User } = require('../model/user')
const bcrypt = require('bcrypt')

exports.test = async (req, res, next) => {
  try {
    let { email, password } = req.validValue
    // 检测用户是否存在
    let user = await User.findOne({ email })
    // 邮箱名不存在
    if(!user) {
      return res.status(400).json({
        code: 400,
        msg: '用户名或密码错误'
      })
    }
    // 邮箱名正确，检测密码
    const result = await bcrypt.compare(password, user.password)
    // 密码错误
    if(!result) {
      return res.status(400).json({
        code: 400,
        msg: '用户名或密码错误'
      })
    }

    // 登录成功
    res.status(200).json({
      code: 200,
      msg: '登录成功',
      authorization: {
        access_token: user.generateToken()
      }
    })
  } catch (err) {
    next(err)
  }
}
// 引入 User 模型
const { User } = require('../model/user')

const bcrypt = require('bcrypt')

// 注册用户
exports.register = async (req, res, next) => {
  try {
    // 存储经过检验的数据
    let { email, password } = req.validValue
    // 查询邮箱是否已被注册过
    let user = await User.findOne({ email })

    // 检测是否存在获取到的用户信息
    if (user) {
      // 无法再次注册，响应注册失败
      return res.status(400).json({
        code: 400,
        msg: '用户已注册',
        data: { email }
      })
    }

    // 可注册的新用户
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)

    user = new User({
      email,
      password,
      name: '默认用户名'
    })

    // 存储
    await user.save()

    // 响应
    res.status(200).json({
      code: 200,
      msg: '注册成功',
      data: { email }
    })
  } catch (err) {
    next(err)
  }
}

// 获取用户
exports.getInfo = (req, res, next) => {
  try {
    res.send('获取用户')
  } catch (err) {
    next(err)
  }
}

// 编辑用户
exports.updateInfo = (req, res, next) => {
  try {
    res.send('编辑用户')
  } catch (err) {
    next(err)
  }
}

// 删除用户
exports.deleteUser = (req, res, next) => {
  try {
    res.send('删除用户')
  } catch (err) {
    next(err)
  }
}


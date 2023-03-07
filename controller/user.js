// 引入 User 模型
const { User } = require('../model/user')
const { Article } = require('../model/articles')

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
exports.getInfo = async (req, res, next) => {
  try {
    const data = await User.findById(req.userData._id, { password: 0 })
    res.status(200).json({
      code: 200,
      msg: '获取用户信息成功',
      data
    })
  } catch (err) {
    next(err)
  }
}

// 编辑用户
exports.updateInfo = async (req, res, next) => {
  try {
    const body = req.body
    // body 存在，_id 不存在，返回400
    if(!body._id) {
      return res.status(400).json({
        code: 400,
        msg: '缺少参数 _id'
      })
    }
    // body 和 _id 存在，更新用户信息
    const data = await User.findByIdAndUpdate(body._id, body)
    // 更新用户信息失败，返回400
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '更新用户信息失败'
      })
    }
    delete body.password
    // _id 用户可以查到
    res.status(200).json({
      code: 200,
      msg: '编辑用户信息成功',
      data: body
    }) 
  } catch (err) {
    next(err)
  }
}

// 删除用户
exports.deleteUser = async (req, res, next) => {
  try {
    const _id = req.body._id
    // _id 不存在，返回400
    if(!_id) {
      return res.status(400).json({
        code: 400,
        msg: '缺少参数 _id'
      })
    }
    const data = await User.findByIdAndDelete(_id)
    // 同时删除该用户创建的所有文章
    const data2 = await Article.remove({
      author: _id
    })
    // 删除失败，返回400
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '删除用户失败',
        data: {
          _id
        }
      })
    }
    res.status(200).json({
      code: 200,
      msg: '删除用户成功',
      data
    })
  } catch (err) {
    next(err)
  }
}


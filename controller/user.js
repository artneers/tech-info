// 注册用户
exports.register = (req, res, next) => {
  try {
    res.send('注册')
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


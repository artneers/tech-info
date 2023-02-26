exports.test = (req, res, next) => {
  try {
    res.send('登录')
  } catch (err) {
    next(err)
  }
}
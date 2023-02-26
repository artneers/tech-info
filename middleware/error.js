module.exports = (err, req, res, next) => {
  res.status(500).json({
    code: 500,
    msg: '服务端错误'
  })
  console.log(err)
}
exports.getAll = (req, res, next) => {
  try {
    res.send('获取全部分类')
  } catch(err) {
    next(err)
  }
}

exports.get = (req, res, next) => {
  try {
    res.send('获取某个分类')
  } catch(err) {
    next(err)
  }
}

exports.create = (req, res, next) => {
  try {
    res.send('添加新的分类')
  } catch(err) {
    next(err)
  }
}

exports.update = (req, res, next) => {
  try {
    res.send('编辑新的分类')
  } catch(err) {
    next(err)
  }
}

exports.remove = (req, res, next) => {
  try {
    res.send('删除某个分类')
  } catch(err) {
    next(err)
  }
}
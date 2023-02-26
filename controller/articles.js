exports.getAll = (req, res, next) => {
  try {
    res.send('获取全部文章')
  } catch(err) {
    next(err)
  }
}

exports.get = (req, res, next) => {
  try {
    res.send('获取某篇文章')
  } catch(err) {
    next(err)
  }
}

exports.create = (req, res, next) => {
  try {
    console.log(a)
    res.send('添加新的文章')
  } catch(err) {
    next(err)
  }
}

exports.update = (req, res, next) => {
  try {
    res.send('编辑新的文章')
  } catch(err) {
    next(err)
  }
}

exports.remove = (req, res, next) => {
  try {
    res.send('删除某篇文章')
  } catch(err) {
    next(err)
  }
}
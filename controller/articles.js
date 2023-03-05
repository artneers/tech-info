const { Article } = require('../model/articles')

exports.getAll = async (req, res, next) => {
  try {
    const { category, status } = req.query
    let data
    // 判断是否传入筛选的参数
    if(category || status) {
      data = await Article.find(req.query)
    } else {
      data = await Article.find()
    }

    res.status(200).json({
      code: 200,
      msg: '添加文章成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.get = async (req, res, next) => {
  try {
    const id = req.params.articleId
    const data = await Article.findById(id).populate('author category', 'name')
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '该文章不存在',
        data: {
          id
        }
      })
    }
    res.status(200).json({
      code: 200,
      msg: '获取该文章成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    const data = new Article(Object.assign(req.body, {author: req.userData._id}))
    await data.save()
    res.status(200).json({
      code: 200,
      msg: '添加文章成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.update = async (req, res, next) => {
  try {
    const data = await Article.findByIdAndUpdate(req.params.articleId, req.body, { new: true })
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '文章更新失败',
        data: Object.assign(req.body, {
          _id: req.params.articleId
        })
      })
    }
    res.status(200).json({
      code: 200,
      msg: '文章更新成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.remove = async (req, res, next) => {
  try {
    const data = await Article.findByIdAndDelete(req.params.articleId)
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '删除文章失败',
        data
      })
    }
    res.status(200).json({
      code: 200,
      msg: '删除文章成功',
      data
    })
  } catch(err) {
    next(err)
  }
}
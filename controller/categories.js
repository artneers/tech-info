const { Category } = require('../model/categories')

exports.getAll = async (req, res, next) => {
  try {
    const data = await Category.find()
    res.status(200).json({
      code: 200,
      msg: '获取全部分类成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.get = async (req, res, next) => {
  try {
    const cid = req.params.cid
    if(!cid) {
      return res.status(400).json({
        code: 400,
        msg: '未传入参数 id'
      })
    }
    const data = await Category.findById(cid)
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '该分类不存在'
      })
    }
    res.status(200).json({
      code: 200,
      msg: '获取该分类成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    let category = await Category.findOne(req.body)
    // 检测是否已存在该分类，已存在则返回400
    if(category) {
      return res.status(400).json({
        code: 400,
        msg: '该分类已存在',
        data: category
      })
    }
    // 不存在该分类，直接创建
    category = new Category(req.body)
    await category.save()
    res.status(200).json({
      code: 200,
      msg: '添加分类成功',
      data: category
    })

    res.send('添加新的分类')
  } catch(err) {
    next(err)
  }
}

exports.update = async (req, res, next) => {
  try {
    const cid = req.params.cid
    if(!cid) {
      return res.status(400).json({
        code: 400,
        msg: '请传入参数 id'
      })
    }
    const data = await Category.findByIdAndUpdate(cid, req.body, {new: true})
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '编辑分类失败',
        data: req.body
      })
    }
    res.status(200).json({
      code: 200,
      msg: '编辑分类成功',
      data
    })
  } catch(err) {
    next(err)
  }
}

exports.remove = async (req, res, next) => {
  try {
    const cid = req.params.cid
    const data = await Category.findByIdAndDelete(cid)
    console.log(data)
    if(!data) {
      return res.status(400).json({
        code: 400,
        msg: '删除分类失败',
        data: {
          id: cid
        }
      })
    }
    res.status(200).json({
      code: 200,
      msg: '删除分类成功',
      data
    })
  } catch(err) {
    next(err)
  }
}
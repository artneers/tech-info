const router = require('express').Router()
const { Category } = require('../../model/categories')
const { Article } = require('../../model/articles')

// 首页路由
router.get(['/', '/:cid'], async (req, res) => {
  // 读取数据库，获取分类数据
  const category = await Category.find()
  // 获取文章数据
  const current = req.params.cid
  const options = {
    status: 'published'
  }
  if(current) {
    options.category = current
  }
  const article = await Article.find(options).populate('category author', 'name')
  console.log(article)
  res.render('index.html', {
    category,
    current,
    article
  })
})

// 文章页路由
router.get('/articles/:articleId', async (req, res) => {
  // 处理current在header.html中报错
  const current = '只要不为空就行'
  const category = await Category.find()
  const article = await Article.findById(req.params.articleId).populate('category author', 'name')

  res.render('article.html', {
    category,
    current,
    article
  })
})

module.exports = router
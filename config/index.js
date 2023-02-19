module.exports = {
  // 项目配置
  app: {
    // In Windows PowerShell: $env:PORT = 1234
    // Windows系统环境下: set PORT=1234
    port: process.env.PORT || 3000
  },
  // 数据库配置
  db: {
    url: process.env.MONGODB_URL || 'mongodb://localhost:27017/techinfoapi'
  }
}
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/serve', {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: { '^/serve': '' }
    })
  )
}

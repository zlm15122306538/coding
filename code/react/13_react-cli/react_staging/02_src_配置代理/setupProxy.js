const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api1',{ //包含api1前缀时，触发代理
      target: 'http://localhost:5000',  //请求转发地址
      changeOrigin: true, //控制服务器收到请求头中host的值
      pathRewrite:{'^/api1': ''}  //重写请求路径
    }),
    proxy('/api2',{
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite:{'^/api2': ''}
    })
  )
}
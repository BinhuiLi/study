/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */
module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  //开启代理服务器(方式一)
 /*  devServer: {
    proxy: 'http://localhost:5000'
  } */
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/server1': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/server1':''},
        ws: true,   //用于支持webSocket
        changeOrigin: true  //用于控制请求头中host的值
      },
      '/server2': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/server2':''},
        ws: true,   //用于支持webSocket
        changeOrigin: true  //用于控制请求头中host的值
      },
    }
  }
}
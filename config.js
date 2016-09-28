const path = require('path')

module.exports = {
  src: path.resolve(__dirname, 'src'),
  build: {
    index: path.resolve(__dirname, 'assets/index.html'),
    assetsRoot: path.resolve(__dirname, 'assets'),
    assetsSubDirectory: 'publish',
    assetsPublicPath: '/',
    productionSourceMap: false
  },
  dev: {
    host: '0.0.0.0',
    publichost: '127.0.0.1',
    port: 8080,
    proxyTable: {
      '/api/*': 'http://rd.istudy.sh.cn/'
    }
  }
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}


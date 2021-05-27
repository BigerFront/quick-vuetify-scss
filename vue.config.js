const { R, join, src, ui } = require('./ci/paths');

let vueConfig = {
  // chainWebpack: (config) => {
  //   //
  // },
  configureWebpack: (config) => {
    config.resolve.alias['~'] = src;
    config.resolve.alias['~Assets'] = R(src, 'assets');
    config.resolve.alias['~Lib'] = R(src, 'lib');
    config.resolve.alias['~Img'] = R(src, 'assets/img');
    config.resolve.alias['~Ui'] = ui;
    config.resolve.alias['~Views'] = R(src, 'views');
    config.resolve.alias['~Widgets'] = R(src, 'ui/widgets');
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.tianqiapi.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', // 重写路径：去掉路径中开头的 '/api'
        },
      },
    },
  },
};

module.exports = vueConfig;

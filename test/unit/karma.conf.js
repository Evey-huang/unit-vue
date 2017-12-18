// Karma configuration
// Generated on Sat Dec 16 2017 15:23:36 GMT+0800 (CST)

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'], // 浏览器
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'], // 测试框架
    reporters: ['spec', 'coverage'], // 测试报告
    files: ['./index.js'], // 测试入口文件
    preprocessors: {
      './index.js': ['webpack', 'coverage'] // 处理测试文件
    },
    webpack: webpackConfig, // webpack配置
    webpackMiddleware: {
      noInfo: true // 不显示webpack打包日志信息
    },
    coverageReporter: { // 代码覆盖率报告
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}

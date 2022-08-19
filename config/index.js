const config = require('./config')
const plugins = []

// 解决webpack5+ polyfills 错误
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
plugins.push(new NodePolyfillPlugin())

// 打包分析器
if (config.isBundleAnalyzer) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  plugins,
  terser: require('./terser'),
  resolve: require('./resolve'),
  css: require('./css')
}

const { defineConfig } = require('@vue/cli-service')
const config = require('./config')
const { svgPlugin } = require('./src/plugin/index')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: config.plugins,
    resolve: config.resolve,
    externals: {
      fs: require('fs')
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    svgPlugin(config)
  },
  css: config.css,
  terser: config.terser,
  parallel: false
})

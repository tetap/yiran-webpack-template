/**
 * @description: svg加载图标
 * @author: zyc
 * @date-time: 2022-04-07 10:22:38
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

function svgPlugin(config) {
  config.module
    // 规则
    .rule('svg')
    // 忽略
    .exclude.add(resolve('../icons/static'))
    // 结束
    .end()
  config.module
    // 规则
    .rule('icons')
    // 正则，解析 .svg 格式文件
    .test(/\.svg$/)
    // 解析的文件
    .include.add(resolve('../icons/static'))
    // 结束
    .end()
    // 新增了一个解析的loader
    .use('svg-sprite-loader')
    // 具体的loader
    .loader('svg-sprite-loader')
    // loader 的配置
    .options({
      symbolId: 'icon-[name]'
    })
    // 结束
    .end()
}

module.exports = { svgPlugin }

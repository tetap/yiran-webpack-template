const config = require('./config')

module.exports = {
  terserOptions: {
    compress: {
      keep_infinity: true,
      drop_console: config.drop_console,
      drop_debugger: config.drop_debugger
    }
  }
}

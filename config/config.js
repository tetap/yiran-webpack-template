module.exports = {
  isBundleAnalyzer: false,
  drop_console: process.env.NODE_ENV === 'production',
  drop_debugger: process.env.NODE_ENV === 'production'
}

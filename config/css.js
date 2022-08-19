module.exports = {
  // 全局变量
  loaderOptions: {
    scss: {
      additionalData: `
          @import "@/theme/global.scss";
      `
    }
  }
}

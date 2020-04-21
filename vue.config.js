module.exports = {
  chainWebpack: config => {
    // webpack autofix rule
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
    // svg-to-vue rule
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    // glabal styles
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/styles/index.scss";`
      }
    }
  }
}

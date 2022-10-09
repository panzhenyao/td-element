// const NODE_ENV = process.env.NODE_ENV; // lib npm组件, 开发环境 development,

const baseConfig = {
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  // 如有scss配置需求
  // css: {
  //   extract: false,
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       data: `@import "public/css/ui.scss";`
  //     }
  //   },
  // }
};

const devConfig = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },

  publicPath: "./",
  outputDir: "docs",
  ...baseConfig,
};

module.exports = devConfig

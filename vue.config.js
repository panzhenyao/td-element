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
};

const docsConfig = {
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

module.exports = docsConfig

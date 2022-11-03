const path = require("path");
const options = require("./build/config");
const join = (dir) => {
  return path.join(__dirname, dir);
};

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

    // =====================定义别名=========================
    config.resolve.alias.set("@", join("examples"));
    config.resolve.alias.set("packages", join("packages"));
    config.resolve.alias.set("examples", join("examples"));
    config.resolve.alias.set("td-element", join("./"));
    config.resolve.alias.set("main", join("src"));
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
  css: {
    extract: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // 配置全局scss 变量 且只针对vue文件
        additionalData: (content, loaderContext) => {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);
          const pathObj = path.parse(relativePath);
          if (
            pathObj.dir.includes("examples\\components") ||
            pathObj.dir.includes("examples\\views")
          ) {
            if (/(.vue)$/.test(relativePath)) {
              return (
                `@import "packages/theme-chalk/src/common/var.scss";` + content
              );
            }
          }

          return content;
        },
      },
    },
  },
  publicPath: "./",
  outputDir: "docs",
  ...baseConfig,
};

module.exports = docsConfig;

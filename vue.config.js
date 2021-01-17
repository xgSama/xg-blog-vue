"use strict";
const path = require("path");
const defaultSettings = require("./src/settings");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || "vue Element Admin"; // page title

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: 8811,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      },
      extensions: [".js", ".vue", ".json", ".css", ".scss"]
    }
  },
  chainWebpack(config) {
    // 找到svg-loader
    const svgRule = config.module.rule("svg");
    // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.uses.clear();
    // 正则匹配排除node_modules目录
    svgRule.exclude.add(/node_modules/);
    // 添加svg新的loader处理
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
        include: ["./src/icons"]
      });

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/icons"));
    imagesRule.test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
  }
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       // 是否使用css分离插件 ExtractTextPlugin
  //       // extract: true,
  //       // 开启 CSS source maps?
  //       sourceMap: false,
  //       // css预设器配置项
  //       prependData: `@import "./src/style/main.scss";`
  //     }
  //   }
  // }
};

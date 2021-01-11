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
  }
  // chainWebpack(config) {},
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

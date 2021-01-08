module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/style/main.scss";`
      }
    }
  }
};

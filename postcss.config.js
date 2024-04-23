module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 10,
      propList: ["*"],
      minPixelValue: 2,
      exclude: /node_modules/i,
      selectorBlackList: [/^\.PC/] // 过滤掉.norem-开头的class，不进行rem转换
    }
  }
};

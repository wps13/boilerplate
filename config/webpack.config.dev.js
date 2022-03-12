/* eslint-disable max-len */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const webpackBase = require("./webpack.config.base");

module.exports = {
  ...webpackBase("development"),
  mode: "development",
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

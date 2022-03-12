/* eslint-disable max-len */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
  const isDev = mode === "development";

  return {
    entry: path.join(path.resolve(__dirname), "../src/index.jsx"),
    output: {
      path: path.join(path.resolve(__dirname), "../dist"),
      filename: "bundle.js"
    },
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins:
                  mode === "development"
                    ? ["@babel/plugin-transform-runtime"]
                    : []
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.(c|sc|sa)ss$/,
          use: isDev
            ? ["style-loader", "css-loader", "sass-loader"]
            : [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                disable: true, // webpack@2.x and newer
                name: "[path][name].[ext]"
              }
            }
          ]
        }
      ]
    }
  };
};

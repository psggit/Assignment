const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./../src/index.js"),
  },

  plugins: [
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "",
      template: path.resolve(__dirname, "./../index.html")
    }),
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "./../dist"),
    publicPath: "/"
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./../src/components"),
      Sass: path.resolve(__dirname, "./../src/sass"),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          "presets": [
            "@babel/preset-react",
            "@babel/preset-env"
          ]
        }
      },
    ]
  }
}

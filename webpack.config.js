const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleExtHtmlWebpackPlugin = require("style-ext-html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devServer: {
    contentBase: path.join(__dirname, "src")
  },
  entry: {
    main: "./src/main.js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunks: [],
      minify: {
        collapseWhitespace: true,
        minifyCSS: true
      }
    }),
    new MiniCssExtractPlugin(),
    new StyleExtHtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.jpg$/,
        use: [
          "file-loader",
          {
            loader: "img-loader",
            options: {
              plugins: [require("imagemin-mozjpeg")({})]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  }
};

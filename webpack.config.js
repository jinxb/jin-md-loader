const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "jin-babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
            "style-loader",
            "css-loader"
          ]
      },
      {
        test: /\.md$/i,
        use: [
          // "html-loader",
          "jin-md-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  resolveLoader: {
    modules:['node_modules','jin-loaders']
  }
}
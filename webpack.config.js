const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
    rules: [
      {
            // test: /\.css$/i,
          test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      }, {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [ "babel-loader"]
      }
    ],
    },
     plugins: [new HtmlWebpackPlugin()],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
  },
};
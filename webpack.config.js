const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true },
          },
        ],
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './template/index.html',
    }),
  ]
};
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  module: {
      rules: [
          {
              test: /\.jsx?/,
              use: 'babel-loader',
              include: [path.resolve(__dirname, 'src')],
              exclude: [/node_modules/]
          },
          {
              test: /\.tsx?/,
              use: 'ts-loader',
              include: [path.resolve(__dirname, 'src')],
              exclude: [/node_modules/]
          }
      ]
  },
  resolve: {
      extensions: ['.tsx', '.jsx', '.js', '.ts']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  }
};

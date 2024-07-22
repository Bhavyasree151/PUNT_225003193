const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other configurations ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: true,
    }),
  ],
};
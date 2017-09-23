// Import general modules
const path = require('path')

// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')

// Configure plugins
const HtmlWebpackPluginConfig= new HtmlWebpackPlugin({
  template: path.join(__dirname, 'app', 'index.html'),
  filename: 'index.html',
})

// Main config
module.exports = {
  entry: path.join(__dirname, 'app', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 4000
  },
  resolve: {
    alias: {
      // Component path aliases
      Components: path.join(__dirname, 'app', 'components'),
      // Sass/CSS path aliases
      Styles: path.join(__dirname, 'app', 'styles'),
      // Redux
      Redux: path.join(__dirname, 'app', 'redux'),
      Actions: path.join(__dirname, 'app', 'redux', 'actions'),
      Reducers: path.join(__dirname, 'app', 'redux', 'reducers'),
      // Util
      Util: path.join(__dirname, 'app', 'util'),
    }
  }
}

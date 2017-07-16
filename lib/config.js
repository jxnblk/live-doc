const path = require('path')
const webpack = require('webpack')

const babel = {
  loader: require.resolve('babel-loader'),
  options: {
    presets: [
      'babel-preset-env',
      'babel-preset-stage-0',
      'babel-preset-react'
    ].map(require.resolve)
  }
}

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.join(__dirname, './entry.js')
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babel
      },
      {
        test: /\.js$/,
        include: /live\-doc/,
        use: babel
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}

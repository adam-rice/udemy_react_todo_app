var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './app/app.jsx'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/API'
    ],
    alias: {
      Styles: 'app/CSS/styles.scss'
    },
    extenstions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'es2017'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};

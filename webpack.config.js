const path = require('path');


module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }, 
        { test: /\.jpg$/, use: [ "file-loader" ] },
        { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] }
      ],
      loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'es2016']
            }
        }
    ]
  },
  //fix bug cannot resolve  'fs'
  node: {
    fs: "empty"
 },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};
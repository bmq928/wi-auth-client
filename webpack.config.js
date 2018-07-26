const path = require('path');


module.exports = {
  entry: path.join(__dirname,'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      { test: /\.jpg$/, use: ["file-loader"] },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-3']
        }
      }
    ],
    // loaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['stage-3']
    //     }
    //   }
    // ]
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
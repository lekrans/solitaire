const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
              {
                loader: 'tee-loader',
                options: {
                  label: 'after',
                }
              },
              'babel-loader',
              {
                loader: 'tee-loader',
                options: {
                  label: 'before'
                }
              }
            ]
        }
      ]
    },
    resolveLoader: {
      alias: {
        'tee-loader': path.resolve(__dirname, 'tee-loader.js'),
      }
    }
  }
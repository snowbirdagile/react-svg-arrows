const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

var config = {
  mode: 'production',
  entry: './src/react-svg-arrows.js',
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: 'lib/',
    filename: 'react-svg-arrows.js',
    sourceMapFilename: 'react-svg-arrows.sourcemap.js',
    library: 'ReactSVGArrows',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            inline: false,
          },
        },
      }),
    ],
  },
};

module.exports = config;

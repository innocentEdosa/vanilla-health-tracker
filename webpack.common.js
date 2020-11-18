const PATH = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = dotenv.config().parsed || {};

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: './src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-bundle.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
                "@babel/plugin-transform-regenerator",
                "@babel/plugin-transform-async-to-generator",
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // options: {
            //   name: 'assets/[hash].[ext]',
            // },
          },
        ],
      },
    //   {
    //     test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    //     use: ['svg-inline-loader'],
    // },
      {
        test: /\.(png|gif|jpeg|svg|woff|woff2|ttf|otf|eot)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Phoenix',
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin(envKeys),
    new BundleAnalyzerPlugin({
      analyzerMode: 'json',
    }),
  ],
};
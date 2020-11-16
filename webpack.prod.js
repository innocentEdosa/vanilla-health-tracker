const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
});

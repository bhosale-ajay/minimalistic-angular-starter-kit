var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        filename: 'static/js/[name].js'
    },

    plugins: [
        new ExtractTextPlugin('static/css/[name].css')
    ]
});
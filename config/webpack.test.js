var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader?sourceMap=false,inlineSourceMap=true', 
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null-loader'
            },
            {
                test: /\.css$/,
                loader: 'null-loader'
            },
            {
                test: /\.less$/,
                loader: 'null-loader'
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|app\\spec)/,
                loader: 'istanbul-instrumenter-loader',
                enforce: 'post'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root(''), // location of your src
            {} // a map of your routes
        )
    ]
};

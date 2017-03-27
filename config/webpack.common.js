var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    output: {
        path: helpers.root('dist'),
        publicPath: ''
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: 
                [
                    'angular2-template-loader',
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: helpers.root('tsconfig.json') }
                    }
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=[name].[hash].[ext]&outputPath=static/assets/&publicPath=static/assets/'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract({ 
                    fallback: 'style-loader', 
                    use: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw-loader'
            },
            {
                test: /.*\.less$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract({
                    use:[ 'css-loader', 'less-loader' ],
                    fallback: 'style-loader'
                })
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root()
        }),

        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root(''), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'index.html',

        }),

        new HtmlWebpackPlugin({
            inject: false,
            filename: 'chunks/chunk-css.cshtml',
            template: './config/chunk-css.ejs'
        }),

        new HtmlWebpackPlugin({
            inject: false,
            filename: 'chunks/chunk-js.cshtml',
            template: './config/chunk-js.ejs'
        })
    ]
};
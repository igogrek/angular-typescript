var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;

var config = {
    entry: './src/scripts/angular-app/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.webpack.js', '.web.js', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap!postcss-loader')
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },
    postcss: function() {
        return [autoprefixer];
    },
    devServer: {
        inline: true
    },
    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/images/favicon.ico',
            hash: true
        })
    ]
};

if (!argv.production) {
    config.debug = true;
    config.devtool = 'source-map';
} else {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: false,
        output: {
            comments: false
        }
    }));
}

module.exports = config;
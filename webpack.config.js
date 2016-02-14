var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/scripts/angular-app/app.ts',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
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
                loader: ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader!postcss-loader')
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
    postcss: function () {
        return [autoprefixer];
    },
    devServer: {
        inline: true
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/images/favicon.ico'
        })
    ]
};
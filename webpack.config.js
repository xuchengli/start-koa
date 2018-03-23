const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    mode: process.env.NODE_ENV || 'production',
    entry: ['./web/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: this.mode === 'production'
            ? 'js/[name].[chunkhash].js'
            : 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
module.exports = config;

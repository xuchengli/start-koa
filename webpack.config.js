const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const env = process.env.NODE_ENV || 'production';

let config = {
    mode: env,
    entry: ['./web/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: env === 'production'
            ? 'js/[name].[chunkhash].js'
            : 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash:6].[ext]',
                    limit: 10000
                }
            },
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
if (env === 'production') {
    config = merge(config, {
        optimization: {
            splitChunks: {
                chunks: 'all'
            },
            runtimeChunk: true
        }
    });
}
module.exports = config;

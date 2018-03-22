const path = require('path');
const production = process.env.NODE_ENV === 'production';

const config = {
    mode: production ? 'production' : 'development',
    entry: ['./web/index.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: production ? 'js/[name].[chunkhash].js' : 'js/bundle.js',
        publicPath: '/'
    }
};
module.exports = config;

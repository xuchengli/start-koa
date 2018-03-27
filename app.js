const Koa = require('koa');
const log4js = require('log4js');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const userRoute = require('./src/routes/UserRoute');

const app = new Koa();
const router = new Router();
const logger = log4js.getLogger();
logger.level = 'debug';

const env = process.env.NODE_ENV || 'production';

router.prefix('/api').use(userRoute.routes());
app.use(router.routes());
app.use(serve(path.join(__dirname, 'public')));

app.listen(8080, function() {
    logger.info('Server started, listening on port 8080!');
    if (env === 'development') {
        const koaWebpack = require('koa-webpack');
        const config = require('./webpack.config');
        app.use(koaWebpack({
            config: config,
            dev: {
                publicPath: config.output.publicPath,
                stats: {
                    colors: true
                },
                logLevel: 'warn'
            },
            hot: {
                server: this
            }
        }));
    }
});

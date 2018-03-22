const Koa = require('koa');
const log4js = require('log4js');
const Router = require('koa-router');
const userRoute = require('./src/routes/UserRoute');

const app = new Koa();
const router = new Router();
const logger = log4js.getLogger();
logger.level = 'debug';

const env = process.env.NODE_ENV || 'production';

if (env === 'development') {
    const koaWebpack = require('koa-webpack');
    const config = require('./webpack.config');
    app.use(koaWebpack({
        config: config,
        dev: {
            publicPath: config.output.publicPath,
            stats: {
                colors: true
            }
        }
    }));
}
router.prefix('/api').use(userRoute.routes());
app.use(router.routes());

app.listen(8080, () => logger.info('Server started, listening on port 8080!'));

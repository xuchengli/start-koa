const Koa = require('koa');
const log4js = require('log4js');
const Router = require('koa-router');
const user = require('./src/routes/user');

const app = new Koa();
const router = new Router();
const logger = log4js.getLogger();
logger.level = 'debug';

// app.keys = ['im a newer secret', 'i like turtle'];

// x-response-time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
//     logger.debug(`${ms}ms`);
// });

// logger
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
// });

// app.use(async ctx => {
//     logger.debug(ctx.acceptsLanguages('zh-CN', 'en'));
//
//     let name = ctx.cookies.get('name', { signed: true });
//     if (!name) ctx.throw(401, 'access_denied');
//
//     ctx.cookies.set('name', 'tobi', { signed: true });
//     // ctx.body = 'Hello World!';
//     ctx.body = ['foo', 'bar'];
// });

// router.get('/', ctx => {
//     ctx.body = { message: 'Hello World!' };
// });

router.prefix('/api').use(user.routes());
app.use(router.routes());

app.listen(8080, () => {
    logger.info('Server started>>>>');
});

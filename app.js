const Koa = require('koa');
const log4js = require('log4js');

const app = new Koa();
const logger = log4js.getLogger();
logger.level = 'debug';

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    logger.debug(`${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    logger.debug(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async ctx => {
    ctx.body = 'Hello World!';
});

app.listen(8080);

const User = require('../models/user');
const Router = require('koa-router');

const router = new Router();
const user = new User();

router.get('/users', async ctx => {
    try {
        ctx.body = await user.list();
    } catch (err) {
        ctx.status = 404;
        ctx.body = { users: 'no content' };
    }
});
module.exports = router;

const UserModel = require('../models/UserModel');
const Router = require('koa-router');

const router = new Router({
    prefix: '/users'
});
const userModel = new UserModel();

router.get('/', async ctx => {
    try {
        ctx.body = await userModel.list();
    } catch (err) {
        ctx.status = 404;
        ctx.body = { users: 'no content' };
    }
});
router.get('/:id', async ctx => {
    try {
        ctx.body = await userModel.show(ctx.params.id);
    } catch (err) {
        ctx.status = 404;
        ctx.body = { user: 'not exist' };
    }
});
module.exports = router;

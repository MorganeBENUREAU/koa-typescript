const Router = require('@koa/router');
const koaRouter = new Router();

const errorController = require('../controllers/404');
const generatorController = require('../controllers/generator');

koaRouter.get('/', (ctx: any) => {ctx.body = 'kikou'});

koaRouter.get('/generate', generatorController.generate);

koaRouter.use(errorController.notFoundResource);


module.exports = koaRouter;
const Router = require('@koa/router');
const koaRouter = new Router();

const errorController = require('../controllers/404');
const generatorController = require('../controllers/generator');


koaRouter.get('/', generatorController.generate);


koaRouter.use(errorController.notFoundResource);


module.exports = koaRouter;
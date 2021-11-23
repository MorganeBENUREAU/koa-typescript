const koaRouter = require('@koa/router');

const router = koaRouter();

const { errorCont, generatorCont } = require('../controllers');

router.get('/generator', generatorCont.generate);

router.use(errorCont.notFoundResource);

module.exports = router;
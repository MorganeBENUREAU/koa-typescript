require('dotenv').config();

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();
const router = require('./app/routers');

const port = process.env.PORT || `3000`;

app.use(bodyParser());

app.use(logger());

// Routage
app.use(router.routes());


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
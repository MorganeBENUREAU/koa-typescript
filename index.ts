require('dotenv').config();

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// Permet de logguer chaque requete, son statut et le temps qu'elle prend
const logger = require('koa-logger');

// Import package pour utiliser view
const views = require('koa-views');

// Pour le css
const serve = require('koa-static');

const app = new Koa();
const router = require('./app/routers');

const port = process.env.PORT || `3000`;

app.use(bodyParser());

app.use(logger());

//       chemin vers doss des view   extension du fichier
app.use(views('app/views', {extension: 'ejs'}));

// pour le css
app.use(serve('./public'));

// Routage
app.use(router.routes());


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
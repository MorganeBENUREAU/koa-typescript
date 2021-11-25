const data = require('../data/data.json');



const generator = {

    async generate (ctx: any) {
        const random = Math.floor(Math.random() * data.length);
        const randomData = data[random].disney_movie_title ;
        console.log('kikoujsuisla');
        await ctx.render('index.ejs', {randomData});
       
    }

};

module.exports = generator;
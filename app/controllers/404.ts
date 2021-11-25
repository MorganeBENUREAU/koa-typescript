module.exports = {

    notFoundResource(ctx: any) {
        ctx.status = 404;
        ctx.body = { data: [], error: `Resource not found` };
    }
};
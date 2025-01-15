const newsRouter = require('./news');
const sitesRouter = require('./sites');

function route(app) {
    // Định nghĩa một route
    app.use('/news', newsRouter);

    app.use('/', sitesRouter);
}
module.exports = route;

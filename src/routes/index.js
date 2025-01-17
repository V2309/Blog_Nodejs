const newsRouter = require('./news');
const sitesRouter = require('./sites');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
    // Định nghĩa một route
    app.use('/news', newsRouter);

    app.use('/courses', coursesRouter);

    app.use('/me', meRouter);

    app.use('/', sitesRouter);


}
module.exports = route;

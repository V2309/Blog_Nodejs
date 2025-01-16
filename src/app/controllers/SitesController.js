const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
class SitesController {
    // phương thức lấy ra trang news [GET] /news
    home(req, res, next) {
        Course.findAll()
            .then((courses) => {
                res.render('home', {
                    courses: mutipleSequelizeToGet(courses),
                });
            })
            .catch((error) => {
                next(error);
            });
    }
    // phương thức lấy ra trang search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController(); // Export ra một instance của NewsController

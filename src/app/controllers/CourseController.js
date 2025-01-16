const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
class CourseController {
    show(req, res) {
        res.send('Course Detail');
    }

    // phương thức lấy ra trang search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new CourseController(); // Export ra một instance của NewsController

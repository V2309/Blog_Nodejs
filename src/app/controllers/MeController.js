const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
const { sequelizeToObject } = require('../../util/sequelize');
const { Compiler } = require('sass');
class MeController {
   // [GET] /me/stored/courses
    storedCourses(req, res,next) {
        Course.findAll({})
            .then(courses => {
                res.render('me/stored-courses', {
                    courses: mutipleSequelizeToGet(courses),
                });
            })
            .catch(next);
    
    }
}

module.exports = new MeController(); // Export ra một instance của NewsController

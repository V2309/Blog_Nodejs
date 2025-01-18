const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
const { sequelizeToObject } = require('../../util/sequelize');
const { Compiler } = require('sass');
const { Op } = require('sequelize');
class MeController {
   // [GET] /me/stored/courses
 
storedCourses(req, res, next) {
    Promise.all([
        Course.count({ where: { deleted_at: { [Op.ne]: null } }, paranoid: false }), // Đếm các bản ghi đã xóa mềm
        Course.findAll({ where: { deleted_at: null } }), // Lấy danh sách các bản ghi chưa bị xóa
    ])
        .then(([deletedCount, courses]) => {
            res.render('me/stored-courses', {
                courses: mutipleSequelizeToGet(courses),
                deletedCount, // Truyền số lượng bản ghi đã xóa mềm vào view
            });
        })
        .catch(next);
}

        // Course.findAll({})
        //     .then(courses => {
        //         res.render('me/stored-courses', {
        //             courses: mutipleSequelizeToGet(courses),
        //         });
        //     })
        //     .catch(next);
    
    
   // [GET] /me/trash/courses
trashCourses(req, res, next) {
    Course.findAll({
        where: {
            deleted_at: {
                [Op.ne]: null, // Chỉ lấy những bản ghi có deleted_at khác NULL (bị xóa mềm)
            },
        },
        paranoid: false, // Cho phép lấy cả dữ liệu bị xóa mềm
    })
        .then((courses) => {
            res.render('me/trash-courses', {
                courses: mutipleSequelizeToGet(courses),
            });
        })
        .catch(next);
}
}



module.exports = new MeController(); // Export ra một instance của NewsController

const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
const { sequelizeToObject } = require('../../util/sequelize');
const { Compiler } = require('sass');
const { Op } = require('sequelize');
class MeController {
   // [GET] /me/stored/courses
 
   storedCourses(req, res, next) {
    // Cấu hình các điều kiện sắp xếp nếu có query _sort
    const order = req.query.hasOwnProperty('_sort') && ['asc', 'desc'].includes(req.query.type)
    ? [[req.query.column, req.query.type]] // Nếu hợp lệ, sử dụng cột và kiểu sắp xếp từ query
    : []; // Nếu không, giữ mảng rỗng
    // Sử dụng Promise.all để chạy các Promise song song
    Promise.all([
        Course.count({ where: { deleted_at: { [Op.ne]: null } }, paranoid: false }), // Đếm bản ghi đã xóa mềm
        Course.findAll({ where: { deleted_at: null }, order }), // Lấy danh sách các bản ghi chưa bị xóa với sắp xếp
    ])
        .then(([deletedCount, courses]) => {
            res.render('me/stored-courses', {
                courses: mutipleSequelizeToGet(courses),
                deletedCount, // Truyền số lượng bản ghi đã xóa mềm vào view
            });
        })
        .catch(next); // Xử lý lỗi
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

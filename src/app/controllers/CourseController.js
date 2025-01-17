const Course = require('../models/Course');
const { mutipleSequelizeToGet } = require('../../util/sequelize');
const { sequelizeToObject } = require('../../util/sequelize');
class CourseController {

// [GET] /courses/:slug
showDetail(req, res, next) {
    Course.findOne({
        where: { slug: req.params.slug }, // Điều kiện tìm kiếm
    })
        .then((course) => {
            if (!course) {
                return res.status(404).send('Course not found'); // Xử lý nếu không tìm thấy khóa học
            }
            res.render('courses/showDetail', {
                course: course.get({ plain: true }), // Chuyển model Sequelize thành đối tượng JS
            });
        })
        .catch(next); // Xử lý lỗi
}

    // [GET] /courses/createCourses
    createCourses(req, res) {
       res.render('courses/createCourses');
    }
    // [POST] /courses/storeCourses
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;

        // Sử dụng phương thức `create` của Sequelize
        Course.create(formData)
            .then(() => res.redirect('/'))
            .catch(next);
    }
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findByPk(req.params.id)
            .then((course) => {
                if (!course) {
                    return res.status(404).send('Course not found');
                }

                res.render('courses/edit', {
                    course: course.get({ plain: true }),
                });
            })
            .catch(next);
      
    }
    // [PUT] /courses/:id
    update(req, res, next) {
        Course.update(req.body, {
            where: { id: req.params.id },
        })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    // phương thức lấy ra trang search [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new CourseController(); // Export ra một instance của NewsController

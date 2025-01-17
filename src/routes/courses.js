const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/createCourses', courseController.createCourses);

router.post('/store', courseController.store);

router.get('/:id/edit', courseController.edit);

router.put('/:id', courseController.update);

router.delete('/:id', courseController.destroy);

router.get('/:slug', courseController.showDetail);
    

module.exports = router;

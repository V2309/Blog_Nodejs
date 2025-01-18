const { sequelize } = require('../../config/db');
const { DataTypes } = require('sequelize');
const slugify = require('slugify'); // Cài đặt thư viện slugify: npm install slugify

const Course = sequelize.define(
    'Course',
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
        slug: {
            type: DataTypes.TEXT,
            unique: true, // Ràng buộc unique
        },
        video_id: {
            type: DataTypes.TEXT,
        },
        level: {
            type: DataTypes.TEXT,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        deleted_at: {
            type: DataTypes.DATE,
        },
    },

    {   
        paranoid: true, // Kích hoạt soft delete
        tableName: 'courses', // Tên bảng trong cơ sở dữ liệu
        timestamps: true, // Tắt tự động thêm createdAt và updatedAt
        underscored: true, // Sử dụng dấu gạch dưới thay vì viết hoa chữ cái đầu của mỗi từ
        hooks: {
            beforeCreate: async (course, options) => {
                if (!course.slug) {
                    let baseSlug = slugify(course.name, {
                        lower: true,
                        strict: true,
                    });

                    let uniqueSlug = baseSlug;
                    let count = 1;

                    // Kiểm tra xem slug đã tồn tại trong DB chưa
                    while (await Course.findOne({ where: { slug: uniqueSlug } })) {
                        uniqueSlug = `${baseSlug}-${count++}`; // Thêm hậu tố nếu bị trùng
                    }

                    course.slug = uniqueSlug;
                }
            },
        },
   
    },
);

module.exports = Course;

const { sequelize } = require('../../config/db');
const { DataTypes } = require('sequelize');

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
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'courses', // Tên bảng trong cơ sở dữ liệu
        timestamps: false, // Tắt tự động thêm createdAt và updatedAt
        underscored: true, // Sử dụng dấu gạch dưới thay vì viết hoa chữ cái đầu của mỗi từ
    },
);

module.exports = Course;

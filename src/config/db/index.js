const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
module.exports = { sequelize, connect };

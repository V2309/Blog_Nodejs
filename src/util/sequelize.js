const sequelize = require('../config/db');

module.exports = {
    mutipleSequelizeToGet: function (sequelize) {
        return sequelize.map((item) => item.get());
    },
    
    sequelizeToObject: function (sequelize) {
        return sequelize.get();
    },
};

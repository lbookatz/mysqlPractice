const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");

const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users
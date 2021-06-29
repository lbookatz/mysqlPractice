const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");

const Movies = sequelize.define("movies", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Movies
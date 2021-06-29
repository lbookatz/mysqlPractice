const { Sequelize,DataTypes,Op } = require("sequelize");
const db = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");

const Movies = db.define("movies", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Movies
const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");

const Favorites = sequelize.define ("favorites",{
    users_id:{
        type:DataTypes.INTEGER,
        refrences:{
            model: "users",
            key: "id"
        }
    },
    movies_id:{
        type:DataTypes.INTEGER,
        refrences:{
            model: "movies",
            key: "id"
        }
    }
});

module.exports = Favorites
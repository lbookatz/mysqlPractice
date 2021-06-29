const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");

const Users = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Movies = sequelize.define("movies", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

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

const run = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // await Sequelize.afterSync();

        await Movies.destroy({truncate : true})
        await Users.destroy({truncate : true})
        await Favorites.destroy({truncate : true})

        const usersArray = ["lance","jeremy","fred"]
        for (let i=0;i<usersArray.length;i++){
            await Users.create({name:usersArray[i]});
        }

        const moviesArray = ["godfather","shawshank","bambi","iron man"]
        for (let i=0;i<moviesArray.length;i++){
            await Movies.create({name:moviesArray[i]});
        }

        const userByName = await Users.findOne({raw:true,attributes: ['id'],where:{name:"fred"}})
        const movieByName = await Movies.findOne({raw:true,attributes: ['id'],where:{name:"shawshank"}})

        await Favorites.create({users_id:userByName.id, movies_id:movieByName.id} )
        
        const usersall = await Users.findAll();        
        const moviesall = await Movies.findAll();


        // console.log(usersall)
        // console.log(moviesall)


        await sequelize.close();
    } catch(error) {
        console.log(error);
    }
}

const createusers = async () =>{


}

const createmovie = async () =>{


}

const createfavorite = async () =>{


}





run();
const { Sequelize,DataTypes,Op } = require("sequelize");
const sequelize = new Sequelize("mysql://root:PASSWORD@localhost:3306/practicedb");
const express = require("express"); 
const app = express(); 
const addRoutes = require("./routes/add")
const Movies = require("./models/movies")
const Users = require("./models/Users")
const Favorites = require("./models/Favorites")

// const lookupbyname = (name, raw=true) => {return {raw, where:{name}}}



app.use(express.json())
app.use("/add",addRoutes)

// const run = async () => {
//     try {
        
//         // await Sequelize.afterSync();

//         // await Movies.destroy({truncate : true})
//         // await Users.destroy({truncate : true})
//         // await Favorites.destroy({truncate : true})

//         // const usersArray = ["lance","jeremy","fred","jmbarry"]
//         // for (let i=0;i<usersArray.length;i++){
//         //     await Users.create({name:usersArray[i]});
//         // }

//         // const moviesArray = ["godfather","shawshank","bambi","iron man"]
//         // for (let i=0;i<moviesArray.length;i++){
//         //     await Movies.create({name:moviesArray[i]});
//         // }


//         // const moviesArray = ["godfather","shawshank","bambi","iron man"]
//         // for (let name of moviesArray){
//         //     await Movies.create({name});
//         // }

//         // const userByName = await Users.findOne(lookupbyname("fred"))
//         // const movieByName = await Movies.findOne(lookupbyname("shawshank"))

//         // console.log(userByName)

//         // await Favorites.create({users_id:userByName.id, movies_id:movieByName.id} )
        
//         // const usersall = await Users.findAll();        
//         // const moviesall = await Movies.findAll();

//         // console.log(usersall)
//         // console.log(moviesall)


//         await sequelize.close();
//     } catch(error) {
//         console.log(error);
//     }
// }

// run();



const port = process.env.PORT || 5000; 

const server = app.listen(port, async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`server is running on port ${port}`);
});

process.on('SIGINT', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close( async () => {
        await sequelize.close();
        console.log('Http server closed.');
    });
  });
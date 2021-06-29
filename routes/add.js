const express = require('express');
const router = express.Router();
const Movies = require("../models/movies")
const Users = require("../models/Users")
const Favorites = require("../models/Favorites")

router.get ()

router.post('/',async (req,res) => {
    await Movies.create({name:req.body.movie});
    await Users.create({name:req.body.user});
    
    // user.save();    
    res.status(201).send("added");
});

module.exports = router;

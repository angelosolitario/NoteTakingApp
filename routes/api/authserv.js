const express = require("express");
const bcrypt = require('bcryptjs');
const { MongoClient } = require("mongodb");
const app = express();
const User = require('../../models/users')
const port = process.env.PORT || 3002;

app.use(express.json());


/**
 * @route POST /auth
 * @description Authenticate user
 * @access Public
 */
app.post('/',(req,res)=>{
    const {username, password} = req.body;

    //check for username and password
    if(!username || !password){
        return res.status(400).json({msg:"Please enter all fields"})
    }

    //Check if username exists
    User.findOne({username})
    .then(user=>{
        if(!user) return res.status(400).json({msg:'Cannot find username.'})

        bcrypt.compare(password, user.password)
        .then()


    })
    
})

app.listen(port, () => console.log(`Auth Server listening on port ${port}!`));

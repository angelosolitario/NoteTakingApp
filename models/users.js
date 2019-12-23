const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required:true,
    },
    dateCreated:{
        type:Date,
        default:Date.now(),
        required:true,
    }
})

module.exports = mongoose.model('user', userSchema);

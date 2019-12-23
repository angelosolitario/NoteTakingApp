const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    dateCreated:{
        type:Date,
        default: Date.now(),
        require: true
    }
})

module.exports = mongoose.model('note', noteSchema);

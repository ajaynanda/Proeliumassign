const mongoose = require("mongoose")

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
    type:String,
    required:true
    },
    Role:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    }
})
const userdb = mongoose.model('userdb',schema)

module.exports= userdb
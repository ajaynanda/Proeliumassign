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
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
   
    role:String,
    department:{
        type:String,
        required:true
    }
})
const Userdb = mongoose.model('userdb',schema)

module.exports= Userdb
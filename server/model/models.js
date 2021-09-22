const mongoose = require("mongoose")
//let[name,email,password,cpassword,role,department]=req.body
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
   
   
    department:{
        type:String,
        required:true
    }
})
const Userdb = mongoose.model('Userdb',schema)

module.exports= Userdb
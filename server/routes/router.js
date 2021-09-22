const express=require("express")
const route = express.Router()
const axios =require("axios")
const controller = require("../controller/contro")

route.get("/",(req,res)=>{
    axios.get('http://localhost:4000/api/users')
    .then(function(response){
        console.log(response.data);
        res.render("index",{users:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
})
route.get("/adduser",(req,res)=>{
    res.render("adduser.ejs")
})

route.get("/updateuser",(req,res)=>{
    axios.get('http://localhost:4000/api/users',{params:{id:req.query.id}})
    .then(userdata=>{
        res.render("updateuser",{user:userdata.data})
    })
   .catch(err=>{
       res.send(err)
   })
})

route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.put("/api/users/:id",controller.update)
route.delete("/api/users/:id",controller.delete)
module.exports = route
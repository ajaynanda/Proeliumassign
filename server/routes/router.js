const express=require("express")
const route = express.Router()

const controller = require("../controller/contro")

route.get("/",(req,res)=>{
    res.render("index")
})
route.get("/adduser",(req,res)=>{
    res.render("adduser.ejs")
})
route.get("/allusers",(req,res)=>{
    res.render("index.ejs")
})
route.get("/updateuser",(req,res)=>{
    res.render("updateuser.ejs")
})

route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.put("/api/users/id",controller.update)
route.delete("/api/users/id",controller.delete)
module.exports = route
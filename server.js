const express=require("express")
const app = express()
const dotenv = require("dotenv")
const morgan=require("morgan")
const path = require("path")
const bodyparser=require("body-parser")
dotenv.config({path:".env"})
const PORT=process.env.PORT || 4000

app.use(morgan("tiny"))
app.use(bodyparser.urlencoded({extended:true}))
app.use("/css",express.static(path.resolve(__dirname,"assets/css/style.css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/adduser",(req,res)=>{
    res.render("adduser.ejs")
})
app.get("/allusers",(req,res)=>{
    res.render("index.ejs")
})
app.get("/updateuser",(req,res)=>{
    res.render("updateuser.ejs")
})

app.listen(4000,()=>{console.log(`Server running on ${PORT}`)})
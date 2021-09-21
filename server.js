const express=require("express")
const app = express()
const dotenv = require("dotenv")
const morgan=require("morgan")
const path = require("path")
const connectDB = require("./server/database/connection")
const bodyparser = require("body-parser")
dotenv.config({path:".env"})
const PORT=process.env.PORT || 4000
app.use(bodyparser.urlencoded({ extended : true}))
app.use(morgan("tiny"))
connectDB();

app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img"))) 
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))
app.set("view engine","ejs")
app.use("/",require('./server/routes/router'))

app.listen(4000,()=>{console.log(`Server running on ${PORT}`)})
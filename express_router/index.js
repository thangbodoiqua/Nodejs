const express=require("express")
// Importing all the routes
const homeroute = require("./routes/home.js")
const loginroute = require("./routes/login.js")

// Creating express server
const app=express()

// Handling routes request
app.use("/",homeroute)
app.use("/",loginroute)
app.listen((3000),()=>{
    console.log("Server is Running")
})
const express=require("express")
// Importing all the routes
const homeroute=require("./home.js")
const loginroute=require("./login.js")

// Creating express server
const app=express()

// Handling routes request
app.use("/home", homeroute)
app.use("/auth", loginroute)
app.listen((3000),()=>{
    console.log("Server is Running http://localhost:3000")
})
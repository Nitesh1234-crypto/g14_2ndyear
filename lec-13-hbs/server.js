const express = require("express");
const app= express();
const mongoose = require('mongoose');
const Blog = require("./model/blog");
const userRoutes= require("./routes/userRoutes")
app.use(express.json());
app.set('view engine', 'hbs');
app.use("/users",userRoutes)
app.use("/blogs",require("./routes/blogRoutes"))


app.get("/",(req,res)=>{
    res.render("home",{
        name:"Nitesh"
    })
})







mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4433,(req,res)=>{
    console.log("server started")
})
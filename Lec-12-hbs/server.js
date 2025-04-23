const express = require("express");
const app= express();
const mongoose = require('mongoose');
const Blog = require("./model/blog");
const userRoutes= require("./routes/userRoutes")
app.use(express.json());
app.set('view engine', 'hbs');
app.use("/users",userRoutes)
app.get("/",(req,res)=>{
    res.render("home")
})


app.post("/blogs",async(req,res)=>{
    let {title,content,author} = req.body;
    let newBlog= new Blog({
        title:title,
        content:content,
        author:author
    })
    await newBlog.save()
    res.send("blog added!!")
})




mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4433,(req,res)=>{
    console.log("server started")
})
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

app.get("/blogs",async(req,res)=>{
    let allblogs= await Blog.find();
    console.log(allblogs);
    res.render("blogs",{
        data:allblogs
    });

})

app.get("/blogs/:id",async(req,res)=>{
    let {id} = req.params;
    let blog= await Blog.findById(id);
    console.log(blog)
    res.render("blog",{
        blog:blog
    })

})






mongoose.connect('mongodb://127.0.0.1:27017/g14db')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4433,(req,res)=>{
    console.log("server started")
})
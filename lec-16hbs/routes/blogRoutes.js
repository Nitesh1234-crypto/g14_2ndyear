const express = require("express");
const router= express.Router();
router.post("/",async(req,res)=>{
    let {title,content,author} = req.body;
    let newBlog= new Blog({
        title:title,
        content:content,
        author:author
    })
    await newBlog.save()
   res.redirect("/")
})



module.exports = router
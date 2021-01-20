const express=require('express');
const router=express.Router();
const db=require('../config/database');
const Post=require('../models/Post');
router.get('/',(req,res)=>Post.findAll()
.then(test=>{
    console.log(test);
    res.send(test);

})
.catch(err=>console.log(err))
);

module.exports=router;
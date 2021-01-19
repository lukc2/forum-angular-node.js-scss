const express=require('express');
const router=express.Router();
const db=require('../config/database');
const Test=require('../models/Test');
router.get('/',(req,res)=>Test.findAll()
.then(test=>{
    console.log(test);
    res.sendStatus(200);

})
.catch(err=>console.log(err))
);

module.exports=router;
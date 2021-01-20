const express=require('express');
const router=express.Router();
const db=require('../config/database');
const Watek=require('../models/Watek');
router.get('/',(req,res)=>Watek.findAll()
.then(test=>{
    console.log(test);
    res.send(test);

})
.catch(err=>console.log(err))
);
module.exports=router;
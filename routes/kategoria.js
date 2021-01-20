const express=require('express');
const router=express.Router();
const db=require('../config/database');
const Kategoria=require('../models/Kategoria');
router.get('/',(req,res)=>Kategoria.findAll()
.then(test=>{
    console.log(test);
    res.send(test);

})
.catch(err=>console.log(err))
);

module.exports=router;
const express=require('express');
const router=express.Router();
const db=require('../config/database');
const Uzytkownik=require('../models/Uzytkownik');
router.get('/',(req,res)=>Uzytkownik.findAll()
.then(test=>{
    console.log(test);
    res.send(test);

})
.catch(err=>console.log(err))
);
module.exports=router;
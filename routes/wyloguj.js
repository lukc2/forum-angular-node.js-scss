const express=require('express');
const router=express.Router();
router.post('/',(req,res)=>{
    req.session.destroy((err) => {
        res.json({
          success: true,
          msg: "Pomyślnie wylogowano"
        }).redirect('/');
      })
});
module.exports=router;
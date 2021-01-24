const express=require('express');
const router=express.Router();
const db=require('../config/database');
const { check, validationResult } = require('express-validator');
router.get('/',async (req,res)=>await db.Kategoria.findAll()
.then(test=>{
    res.send(test);
})
.catch(err=>console.log(err))
);
router.get('/:kategoriaId',(req,res)=>{
    const kat_id=req.params.kategoriaId;
    db.Watek.findAll({
        include:[{
            model:db.Kategoria,
            where:{
                id:kat_id
            },
            attributes: ["nazwa"]
        },{
            model:db.Uzytkownik,
            attributes: ["nazwa"]
        }],
        order:[["data_modyfikacji",'desc']]
    }).then(data=>{
        res.json(data);
    })
});
router.post("/:kategoriaId/dodaj_watek",[
    check("tytul").isLength({min:10}).withMessage("Zakrótki tytuł wątku"),
    check("tresc").isLength({min:10}).withMessage("Zakrótka treść wątku")
],async (req,res)=>{
    const errors=validationResult(req);
    if (!errors.isEmpty()){
        res.json({
            success:false,
            errors: errors
        }).end();
    }
    let body = req.body;
    db.Watek.create({
        tresc: body.tresc,
        tytul: body.tytul
    }).then(data=>res.json({
        success: true,
        id: data.id,
        msg:"Pomyślnie dodano wątek"
    }))
});
router.get("/:kategoriaId/watek/:watekId",async(req,res)=>{
    let kat_id=req.params.kategoriaId;
    let wat_id=req.params.watekId;
    await db.Watek.findAll({
        include:[{
            model: db.Kategoria,
            where:{
                id:kat_id
            }
        },{
            model: db.Uzytkownik,
            attributes:["nazwa"]
        },{
            model: db.Post,
            where:{
                watek_id: wat_id
            }
        }],
        where:{
            id:wat_id
        }
    }).then(data=>res.json(data));
});
module.exports=router;
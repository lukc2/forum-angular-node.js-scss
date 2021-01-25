const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { check, validationResult } = require('express-validator');
router.get('/', async (req, res) => await db.Kategoria.findAll()
    .then(test => {
        res.send(test);
    })
    .catch(err => console.log(err))
);
router.get('/:kategoriaId', (req, res) => {
    const kat_id = req.params.kategoriaId;
    db.Kategoria.findAll({
        include: [{
            model: db.Watek,
            attributes: ["nazwa"],
            include: [{
                model: db.Uzytkownik,
                attributes: ["nazwa"]
            }]
        }],
        where: {
            id: kat_id
        },
        order: [[db.Watek, "data_modyfikacji", 'DESC']]
    }).then(data => {
        res.json(data);
    })
});
router.post("/:kategoriaId/dodaj_watek", [
    check("tytul").isLength({ min: 10 }).withMessage("Zakrótki tytuł wątku"),
    check("tresc").isLength({ min: 10 }).withMessage("Zakrótka treść wątku")
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({
            success: false,
            errors: errors
        }).end();
        return;
    }
    let body = req.body;
    let katId = req.params.kategoriaId;
    db.Watek.create({
        nazwa: body.tytul,
        uzytkownik_id: req.session.userId,
        kategoria_id: katId
    }).then(watek => {
        db.Post.create({
            watek_id: watek.id,
            uzytkownik_id: req.session.userId,
            tresc: body.tresc
        }).then(post => {
            res.json({
                success: true,
                watek_id: watek.id,
                post_id: post.id,
                msg: "Pomyślnie dodano wątek"
            })
        })
    });
});
router.get("/:kategoriaId/watek/:watekId", async (req, res) => {
    let kat_id = req.params.kategoriaId;
    let wat_id = req.params.watekId;
    await db.Watek.findAll({
        include: [
            {
                model: db.Post,
                include: {
                    model: db.Uzytkownik,
                    attributes: ['nazwa']
                }
            }],
        where: {
            id: wat_id
        },
        order: [[db.Post, "id", 'ASC']]

    }).then(data => res.json(data));
});
router.post("/:kategoriaId/watek/:watekId",
    check("tresc").isLength({ min: 5 }).withMessage("Zakrótka treść posta"),
    async (req, res) => {
        let trescPosta = req.body.tresc;
        let watId = req.params.watekId;
        db.Post.create({
            watek_id: watId,
            uzytkownik_id: req.session.userId,
            tresc: trescPosta
        }).then(data => res.json({
            success: true,
            id: data.id,
            msg: "Utworzono post"
        })).then(post =>
            db.Watek.update(
                { data_modyfikacji: db.Sequelize.NOW },
                {
                    where: {
                        id: post.watek_id
                    }
                })
        ).catch(err => res.json({
            success: false,
            msg: err
        }))
    });
module.exports = router;
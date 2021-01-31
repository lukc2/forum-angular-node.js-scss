const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { auth } = require('../middlewares/middlewares');

router.post("/", auth, (req, res) => {

    db.Uzytkownik.findOne({ where: { id: req.session.userId } }).then(
        User => {
            res.json({
                success: true,
                userId: req.session.userId(),
                username: User.nazwa
            });
            return
        }
    ).catch(err => {
        res.json({
            success: false,
            errors: { err }
        })
    })
});

module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/database');
const { check, validationResult } = require('express-validator');
router.post('/', [
    check('login').isLength({ min: 4 }).withMessage("Login za krutkie"),
    check('haslo').isLength({ min: 6 }).withMessage("Hasło za krutkie")
], async (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json({
            success: false,
            errors: errors
        }).end();
        return;
    }
    let body = req.body;
    const exists = await db.Uzytkownik.findOne({ where: { nazwa: body.login } });
    if (exists === null) {
        res.json({
            success: false,
            errors: [{
                value: body.login,
                param: "login",
                msg: "Nie istnieje taki użytkownk"
            }]
        }).end();
        return;
    }
    let User = await db.Uzytkownik.findOne(
        {
            where: {
                nazwa: body.login
            }
        }).catch(err=>{
            res.json({
                success:false,
                errors:err
            }).end();
            return;
        });
    if (bcrypt.compareSync(body.haslo, User.haslo)) {
        req.session.isLoggedIn=true;
        req.session.userId = User.id;
        res.json({
            success: true,
            userId: req.session.userId,
            msg: "Pomyślnie zalogowano użytkownika",
            redirectTo: "/"
        }).end();

    } else {
        res.json({
            success: false,
            errors: [{
                param: "haslo",
                msg: "Nie poprawne hasło"
            }]
        }).end();
    }
}
);
module.exports = router;

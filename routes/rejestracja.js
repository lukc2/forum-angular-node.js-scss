const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/database');
const { check, validationResult } = require('express-validator');
router.post('/', [
    check('login').isLength({ min: 4 }).withMessage("Login za krótka"),
    check('nazwa').isLength({ min: 4 }).withMessage("Nazwa za krótka"),
    check('haslo').isLength({ min: 6 }).withMessage("Hasło za krótkie"),
    check('email').isEmail().withMessage("Nieprawidłowy adres email")],
    async (req, res) => {
        const errorsAray = validationResult(req);
        if (!errorsAray.isEmpty()) {
            res.json({
                success: false,
                errors: errorsAray
            }).end();
            return;
        }
        let body = req.body;
        const nazwa = await db.Uzytkownik.findOne(
            {
                where: { nazwa: body.nazwa }
            }).catch(err => {
                res.json({
                    success: false,
                    errors: err
                });
                return;
            });
        if (nazwa !== null) {
            res.json({
                success: false,
                errors: [{
                    value: body.nazwa,
                    param: "nazwa",
                    msg: "Nazwa zajęta"
                }]
            }).end();
            return;
        }
        const email = await db.Uzytkownik.findOne({
            where: { email: body.email }
        }).catch(err => {
            res.json({
                success: false,
                errors: err
            })
            return;
        });;
        if (email !== null) {
            res.json({
                success: false,
                errors: [{
                    value: body.email,
                    param: "email",
                    msg: "Email zajęty"
                }]
            }).end();
            return;
        }
        const login = await db.Uzytkownik.findOne({
            where: { email: body.login }
        }).catch(err => {
            res.json({
                success: false,
                errors: err
            })
            return;
        });;
        if (login !== null) {
            res.json({
                success: false,
                errors: [{
                    value: body.login,
                    param: "login",
                    msg: "Login zajęty"
                }]
            }).end();
            return;
        }
        const salt = bcrypt.genSaltSync(8);
        const pwd = bcrypt.hashSync(body.haslo, salt);
        let User = await db.Uzytkownik.create({
            nazwa: body.nazwa,
            login: body.login,
            haslo: pwd,
            email: body.email
        }).then(() => {
            res.json({
                success: true,
                id: User.id,
                msg: "Pomyślnie dodano użytkownika",
                redirectTo: "/loguj"
            });
        }).catch(err => {
            res.json({
                success: false,
                errors: err
            })
        });
    }
);
module.exports = router;
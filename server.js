const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const expressValidator = require('express-validator');
const session = require("express-session");
const db = require("./config/database");
const SequelizeStore=require('connect-session-sequelize')(session.Store);

const middlewares=require('./middlewares/middlewares');

const app = express();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;
const publicFolderPath = path.resolve(__dirname, "client", "public", "build")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setting up session
const sessionStore= new SequelizeStore({
    db: db.sequelize
})
app.use(expressSession({
    secret: 'itssessionkey',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
    
}))
sessionStore.sync();

//routes
app.use('/kategoria',middlewares.auth ,require('./routes/kategoria'));
app.use('/rejestracja',middlewares.loggedIn, require('./routes/rejestracja'));
app.use('/loguj',middlewares.loggedIn, require('./routes/loguj'));
app.use('/wyloguj',middlewares.auth, require('./routes/wyloguj'));
app.get("/",middlewares.auth,async (req,res)=>{
    await db.Kategoria.findAll({
        include:[{
            model:db.Watek,
            attributes: ["nazwa"],
            include:[{
                model:db.Uzytkownik,
                attributes: ["nazwa"]
            }]
        }],
        order:[[db.Watek,"data_modyfikacji",'DESC']]
    }).then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({
            success:false,
            errors: err
        })
    })
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(publicFolderPath))//plik statyczny
    app.get('*',(req,res)=>{
        res.sendFile(path.join(publicFolderPath,"index.html"));//zapobieganie 404
    });
}

app.listen(PORT, console.log(`http://${HOST}:${PORT}/`));
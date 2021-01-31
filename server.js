const express = require("express");
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const session = require("express-session");
const db = require("./config/database");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const middlewares = require('./middlewares/middlewares');

const app = express();

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//setting up session
const sessionStore = new SequelizeStore({
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
app.use('/kategoria', middlewares.auth, require('./routes/kategoria'));
app.use('/rejestracja', middlewares.loggedIn, require('./routes/rejestracja'));
app.use('/loguj', middlewares.loggedIn, require('./routes/loguj'));
app.use('/wyloguj', middlewares.auth, require('./routes/wyloguj'));
app.use('/uzytkownik', middlewares.auth, require('./routes/uzytkownik'));
app.get("/", (req, res) => {
    res.sendFile('index.html', { root: 'dist/' });
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist/'));
    app.get('*', (req, res) => {
        res.sendFile('index.html', { root: 'dist/' });
    });
}

app.listen(PORT, console.log(`http://${HOST}:${PORT}/`));

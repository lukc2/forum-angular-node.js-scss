module.exports = {
    auth: (req, res, next) => {
        if (req.session.isLoggedIn == null) {
            req.session.isLoggedIn = false;
        }
        if (req.session.isLoggedIn == false) {
            res.redirect("/");
        } else {
            next();
        }
    },
    loggedIn: (req, res, next) => {
        if (req.session.isLoggedIn == null) {
            req.session.isLoggedIn = false;
        }
        if (req.session.isLoggedIn == true) {
            res.redirect("/");
        } else {
            next();
        }
    }
}


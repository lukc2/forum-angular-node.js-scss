module.exports  = {
    auth: (req, res, next) => {
        //if (req.session.isLoggedIn == null) {
           // req.session.isLoggedIn = false;
       // }
       // if(req.session.isLoggedIn==false){
         //   res.json({
           //     redirectTo: "/",
             //   msg: "Musisz się zalogować"
           // }).end();
        //} else {
        //    next();
       // }
      next();
    },
    loggedIn: (req, res, next) => {
        if(req.session.isLoggedIn==null){
            req.session.isLoggedIn=false;
        }
        if (req.session.isLoggedIn==true) {
            res.json({
                redirectTo: "/",
                msg: "Jesteś zalogowany"
            }).end();
        } else {
            next();
        }
    }
}


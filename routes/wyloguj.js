const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	if (req.session.isLoggedIn == null || req.session.isLoggedIn == false) {
		res.redirect("/");
		return;
	}
	req.session.destroy(() => {
		res.redirect("/");
	});
});
module.exports = router;
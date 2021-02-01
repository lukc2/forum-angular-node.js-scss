const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
	if (req.session.isLoggedIn == null || req.session.isLoggedIn == false) {
		res.json({
			success: false,
			msg: "Sesja nie istnieje",
			redirectTo: "/loguj",
		}).end();
		return;
	}
	req.session.destroy((err) => {
		res.json({
			success: true,
			msg: "Pomyślnie wylogowano",
			redirectTo: "/loguj",
		});
	});
});
module.exports = router;

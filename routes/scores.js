const { Router } = require("express");
const router = Router();
const scoreController = require("../controllers/score");
const { checkAuthentication } = require("../middleware/auth");

router.get("/score", checkAuthentication, scoreController.showUserScore);
module.exports = router;

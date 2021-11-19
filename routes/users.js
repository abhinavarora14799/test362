const { Router } = require("express");
const router = Router();
const usersController = require("../controllers/user");

router.get("/register", usersController.displayRegisterForm);

router.post("/register", usersController.register);

router.get("/login", usersController.displayLoginForm);

router.post("/login", usersController.login());

router.get("/login-sucess", (req, res) => {
    res.send("Login success");
});

router.get("login-failure", (req, res) => {
    res.send("Login failure");
});

router.get("/logout", usersController.logout);

module.exports = router;

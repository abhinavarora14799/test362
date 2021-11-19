const passport = require("passport");

const User = require("../models/user");

exports.displayRegisterForm = (req, res) => {
    res.render("register");
};

exports.register = (req, res) => {
    User.createNewUser(req.body.user, (err) => {
        if (err) {
            res.redirect("/register");
            return;
        }
        res.redirect("/");
    });
};

exports.displayLoginForm = (req, res) => {
    res.render("login");
};

exports.login = () => {
    return passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login-failure",
    });
};

exports.logout = (req, res) => {
    req.logout();
    res.redirect("/login");
};

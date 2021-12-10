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
        res.redirect("/login");
    });
};

exports.displayLoginForm = (req, res) => {
    res.render("login");
};

exports.login = () => {
    return passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
    });
};

exports.logout = (req, res) => {
    console.log(`[${req.user.username}] logged out`);
    req.logout();
    res.redirect("/");
};

exports.isContainAPIKey = (req, res, next) => {
    if (req.header("Authorization") === "api_key") {
        next();
        return;
    }
    res.status(400).send("You are not authorized");
};

exports.checkAuthentication = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/login");
    }
};

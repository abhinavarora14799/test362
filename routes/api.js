const { Router } = require("express");
const router = Router();
const { isContainAPIKey } = require("../middleware/auth");

router.use(isContainAPIKey);

let userLocationData = {
    northamerica: 4,
    southamerica: 0,
    africa: 0,
    europe: 0,
    asia: 0,
    australia: 0,
    antarctica: 0,
};

let randomLocation = {
    name: "Lampost Pizza",
    yelpLink: "https://www.yelp.com/biz/lamppost-pizza-fountain-valley",
};

router.get("/user", (req, res) => {
    if (req.query.location) {
        res.json(
            req.query.location in userLocationData
                ? userLocationData[req.query.location]
                : "No data for location"
        );
    }
});

router.get("/location/random", (req, res) => {
    res.send(randomLocation);
});

module.exports = router;
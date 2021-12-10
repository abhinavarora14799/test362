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

let randomLocation = [
    {
        name: "Lampost Pizza",
        yelpLink: "https://www.yelp.com/biz/lamppost-pizza-fountain-valley",
    },
    {
        name: "Gina Maria's Pizzeria",
        yelpLink: "https://www.yelp.com/biz/gina-marias-pizzeria-placentia",
    },
    {
        name: "Fuoco Pizzeria Napoletana",
        yelpLink:
            "https://www.yelp.com/biz/fuoco-pizzeria-napoletana-fullerton?osq=pizza",
    },
    {
        name: "Papa Pizza Pie",
        yelpLink:
            "https://www.yelp.com/biz/papa-pizza-pie-fullerton-3?osq=pizza",
    },
    {
        name: "Two Saucy Broads Pizza & Beer Parlor",
        yelpLink:
            "https://www.yelp.com/biz/two-saucy-broads-pizza-and-beer-parlor-fullerton?osq=pizza",
    },
    {
        name: "Lampost Pizza",
        yelpLink:
            "https://www.yelp.com/biz/brooklynz-pizza-fullerton?osq=pizza",
    },
];

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
    let randomIndex = Math.floor(Math.random() * randomLocation.length);
    res.send(randomLocation[randomIndex]);
});

module.exports = router;

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

router.get("/user", (req, res) => {
    if (req.query.location) {
        res.json(
            req.query.location in userLocationData
                ? userLocationData[req.query.location]
                : "No data for location"
        );
    }
});

module.exports = router;

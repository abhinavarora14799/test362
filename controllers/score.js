const axios = require("axios");

exports.showUserScore = (req, res) => {
    console.log(req.user.username);
    axios
        .get(`http://sonnyleetan.xyz:8000/score/${req.user.username}`)
        .then((response) => {
            let userScore = response.data["score"][0]["High_score"];
            res.render("score", { userScore: userScore });
        })
        .catch((err) => {
            res.render("score", {
                userScore: "CANT RETRIEVE SCORE AT THE MOMENT",
            });
        });
};

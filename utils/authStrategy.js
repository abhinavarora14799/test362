const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/db");
const bcrypt = require("bcrypt");

const localStrategy = new LocalStrategy(
    {
        usernameField: "user[username]",
        passwordField: "user[password]",
    },
    (username, password, done) => {
        // Check if username existed in database
        console.log(`[${username}] attempted log in`);
        db.query(
            "SELECT * FROM user WHERE username = ?",
            [username],
            async (err, result) => {
                if (result.length === 0) {
                    return done(null, false);
                }
                const user = result[0];
                const hashedPassword = user.hash;

                isPasswordCorrect = await bcrypt.compare(
                    password,
                    hashedPassword
                );

                if (isPasswordCorrect) {
                    console.log("CORRECT PASSWORD");
                    console.log(`[${username}] logged in`);
                    return done(null, { id: user.id, username: user.username });
                } else {
                    console.log("WRONG PASSWORD");
                    return done(null, false);
                }
            }
        );
    }
);

module.exports = {
    localStrategy,
};

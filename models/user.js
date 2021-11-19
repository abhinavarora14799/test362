const db = require("./db");
const bcrypt = require("bcrypt");

class User {
    static createNewUser = (newUser, done) => {
        db.query(
            "SELECT * FROM user WHERE username = ?",
            [newUser.username],
            async (err, result) => {
                if (err) {
                    done(err);
                    return;
                }

                if (result.length > 0) {
                    console.log("Username already existed");
                    done("Username already existed");
                    return;
                }

                const saltRound = 10;
                const salt = await bcrypt.genSalt(saltRound);
                const hashedPassword = await bcrypt.hash(
                    newUser.password,
                    salt
                );

                db.query(
                    "INSERT INTO user (username, hash) VALUES (?, ?)",
                    [newUser.username, hashedPassword],
                    (err) => {
                        if (err) {
                            done(err);
                            return;
                        }
                        console.log(`New username ${newUser.username} created`);
                        done(null);
                    }
                );
            }
        );
    };
}

module.exports = User;

require("dotenv").config();

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const db = require("./models/db");
const localStrategy = require("./utils/authStrategy").localStrategy;

// ---------------------- GENERAL SETUP ----------------------
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ---------------------- SESSION STORE SETUP ----------------------
const sessionStore = new MySQLStore({}, db);
app.use(
    session({
        secret: process.env.SESSION_SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            maxAge: 1000 * 60 * 60, // 1 hours cookie expiration date
        },
    })
);

// ---------------------- PASSPORT CONFIGURATION ----------------------
app.use(passport.initialize());
app.use(passport.session());
passport.use(localStrategy);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    db.query("SELECT * FROM user WHERE id=?", [user.id], (err, result) => {
        if (err) {
            done(err);
            return;
        }
        user = result[0];
        done(err, user);
    });
});
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
// ---------------------- ROUTES ----------------------
const userRoutes = require("./routes/users");
const APIRoutes = require("./routes/api");
const scoreRoutes = require("./routes/scores");

app.use(userRoutes);
app.use("/api", APIRoutes);
app.use(scoreRoutes);

// -----------------------------------------------------
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
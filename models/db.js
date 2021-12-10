const mysql = require("mysql");

connectionOptions = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

const db = mysql.createConnection(connectionOptions);
db.connect((err) => {
    if (err) throw err;
    console.log("Established connection with database");
});

module.exports = db;

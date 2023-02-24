import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "deb123mySQL",
    database: "colour_streak"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "qscmySQLAE!324",
//     database: "colour_streak"
//   });
  
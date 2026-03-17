//deps
require("dotenv");
const fs = require("fs");

// link to db
const db = require("./connect");

// get set up string
const sql = fs.readFileSync("./server/db/tennis.sql").toString();

// insert data
db.query(sql)
  .then((data) => {
    db.end();
    console.log("⭐ Setup complete");
  })
  .catch((err) => {
    console.log("❌", err);
    db.end();
  });

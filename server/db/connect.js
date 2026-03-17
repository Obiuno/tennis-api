// dependencies
const { Pool } = require("pg");
require("dotenv").config();

// make the pool and export
const db = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = db;

const { Pool } = require("pg");

const airforceDB = new Pool({
  connectionString: process.env.AIRFORCE_DB_URL
});

module.exports = airforceDB;
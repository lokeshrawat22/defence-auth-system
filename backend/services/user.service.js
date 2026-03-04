const bcrypt = require("bcrypt");

const NavyUser = require("../models/navyUser.model.js");
const armyDB = require("../config/mysql.army.js");
const airforceDB = require("../config/pg.airforce.js");

exports.register = async (data) => {

  if (!data.organisation)
    throw new Error("Organisation required");

  const org = data.organisation.toLowerCase();
  const hash = await bcrypt.hash(data.password, 10);

  if (org === "navy") {
    return NavyUser.create({
      username: data.username,
      password: hash
    });
  }

  if (org === "army") {
    return armyDB.query(
      "INSERT INTO army_users (username,password) VALUES (?,?)",
      [data.username, hash]
    );
  }

  if (org === "airforce") {
    return airforceDB.query(
      "INSERT INTO users (username,password) VALUES ($1,$2)",
      [data.username, hash]
    );
  }

  throw new Error("Invalid organisation");
};

exports.findUser = async (data) => {

  const org = data.organisation.toLowerCase();

  if (org === "navy")
    return NavyUser.findOne({ username: data.username });

  if (org === "army") {
    const [rows] = await armyDB.query(
      "SELECT * FROM army_users WHERE username=?",
      [data.username]
    );
    return rows[0];
  }

  if (org === "airforce") {
    const result = await airforceDB.query(
      "SELECT * FROM users WHERE username=$1",
      [data.username]
    );
    return result.rows[0];
  }
};

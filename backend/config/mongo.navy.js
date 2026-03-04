const mongoose = require("mongoose");

const connectNavyDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Navy connected");
  } catch (err) {
    console.log("MongoDB error", err);
  }
};

module.exports = connectNavyDB;

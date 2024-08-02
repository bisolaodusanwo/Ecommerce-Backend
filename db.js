const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-commerce");
const db = mongoose.connection;

db.on("error", (error) => console.error("Connection error:", error));
db.once("open", () => {
  console.log("Database connected");
});

module.exports = db;

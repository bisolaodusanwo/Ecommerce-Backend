const express = require("express");
const cors = require("cors");
const db = require("./db");
const goodsRoutes = require("./routes/goodsRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Connected to Database");
});

// Define routes
app.get("/", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});

app.use("/api/v1", goodsRoutes);

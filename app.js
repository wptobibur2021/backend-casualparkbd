const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");
// Midileware
app.use(express.json());
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
// https://casualparkbd23.vercel.app/
app.use(bodyParser.json());
// Routes
const productRoute = require("./routes/v1/product.route");
const catRoute = require("./routes/v1/category.route");
const orderRoute = require("./routes/v1/order.route");
const userRoute = require("./routes/v1/user.route");
// Routes Midleware
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", catRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
module.exports = app;

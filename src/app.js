const express = require("express");
const cors = require("cors");
foodRoute = require("./routes/food")

const app = express();
const index = require("./routes/index");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors({ origin: true, credentials: true }));

app.use(index);
app.use("/", foodRoute);

module.exports = app;



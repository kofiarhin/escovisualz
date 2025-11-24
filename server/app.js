const express = require("express");
const cors = require("cors");
const app = express();

// setup middlewares
app.use(cors());
app.use(express.json());

app.get("/", async (req, res, next) => {
  return res.json({
    message: "hello world",
    status: "ok",
    date: new Date(),
  });
});

module.exports = app;

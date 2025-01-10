require('dotenv').config()
const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rn", (req, res) => {
    res.send("Hello Roshan Naik");
  });
  


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

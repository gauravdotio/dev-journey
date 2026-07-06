const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "This is working!" });
});

app.get("/hi", (req, res) => {
  res.json({ message: "Hi is also working!" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

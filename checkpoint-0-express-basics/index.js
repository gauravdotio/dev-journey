const express = require("express");
const app = express();

app.use(express.json());

let notes = [];

app.get("/hello", (req, res) => {
  res.json({ message: "This is working!" });
});

app.get("/hi", (req, res) => {
  res.json({ message: "Hi is also working!" });
});

app.post("/notes", (req, res) => {
  const newNOte = {
    id: Date.now(),
    text: req.body.text,
  };
  notes.push(newNOte);
  res.status(201).json(newNOte);
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.delete("/notes/:id", (req, res) => {
  notes = notes.filter(note => note.id != req.params.id);
  res.json({ success: true, message: "Notes deleted" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

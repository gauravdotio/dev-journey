const { Pool } = require("pg");

const pool = new Pool({
  user: "gauravrawat",
  host: "localhost",
  database: "notesapp",
  password: "",
  port: 5432,
});

const express = require("express");
const app = express();

app.use(express.json());

let notes = [];

app.post("/notes", async (req, res) => {
  try {
    const result = await pool.query(
      "INSERT INTO notes (text) VALUES ($1) RETURNING *",
      [req.body.text],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/notes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM notes");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/notes/:id", (req, res) => {
  notes = notes.filter((note) => note.id != req.params.id);
  res.json({ success: true, message: "Notes deleted" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});

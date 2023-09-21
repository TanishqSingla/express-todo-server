const express = require("express");
const { createTodo } = require("../models/db");

const router = express.Router();

router.put("/todo", (req, res) => {
  const { content } = req.body;
  const db = req.app.get("db");

  createTodo(db, content);

  return res
    .status(201)
    .json({ message: "Todo successfully created", data: { content } });
});

router.get("/todos", (req, res) => {
  const db = req.app.get("db");

  const data = db.prepare(`SELECT * FROM todo`).all();

  return res.status(200).json({ data });
});

router.get("/todo/:todoId", (req, res) => {
  const { todoId } = req.params;
  const db = req.app.get("db");

  const data = db.prepare(`SELECT * FROM todo WHERE id = ?`).get(todoId);

  return res.status(200).json({ data });
});

router.delete("/todo/:todoId", (req, res) => {
  const { todoId } = req.params;
  const db = req.app.get("db");

  console.log(db.prepare(`DELETE FROM todo WHERE id = ?`).run(todoId));

  res.status(204).json({ message: "successfully deleted" });
});

module.exports = router;

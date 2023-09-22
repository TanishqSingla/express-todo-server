const express = require("express");
const { createTodo, db } = require("../models/db");

const router = express.Router();

router.put("/todo", (req, res) => {
	try {
  const { content } = req.body;

  createTodo(db, content);

	
  return res
    .status(201)
    .json({ message: "Todo successfully created", data: { content } });
} catch(err) {
	console.log(err);
	return res.status(500).end();
}
});

router.get("/todos", (req, res) => {
  const data = db.prepare(`SELECT * FROM todo`).all();

  return res.status(200).json({ data });
});

router.get("/todo/:todoId", (req, res) => {
  const { todoId } = req.params;

  const data = db.prepare(`SELECT * FROM todo WHERE id = ?`).get(todoId);

  return res.status(200).json({ data });
});

router.delete("/todo/:todoId", (req, res) => {
  const { todoId } = req.params;

  db.prepare(`DELETE FROM todo WHERE id = ?`).run(todoId);

  res.status(204).json({ message: "successfully deleted" });
});

module.exports = router;

const Database = require("better-sqlite3");
const express = require("express");
const router = require("./router");
const { initTable } = require("./models/db");
const app = express();

app.use(express.json());

const db = new Database("todo.db");
if (db) {
  console.log(initTable(db));
  console.log("Successfully connected to database");
}

app.set("db", db);
app.use("/", router);

app.listen(4000, () => console.log("Server running on http://127.0.0.1:4000"));

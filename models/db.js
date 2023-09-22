const Database = require("better-sqlite3");

function initTable(db, dbName) {
  const result = db.exec(
    `create table if not exists ${dbName}(id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT NOT NULL, status TEXT DEFAULT 'PENDING')`,
  );

  return result;
}

function createTodo(db, todo) {
  const result = db.exec(`INSERT INTO todo (todo) VALUES('${todo}')`);
  return result;
}

const db = new Database('todo.db');

module.exports = {
  initTable,
  createTodo,
	db
};

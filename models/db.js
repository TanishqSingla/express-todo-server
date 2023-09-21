function initTable(db) {
  const result = db.exec(
    `create table if not exists todo(id INTEGER PRIMARY KEY AUTOINCREMENT, todo TEXT NOT NULL, status TEXT DEFAULT 'PENDING')`,
  );

  return result;
}

function createTodo(db, todo) {
  const result = db.exec(`INSERT INTO todo (todo) VALUES('${todo}')`);
  return result;
}

module.exports = {
  initTable,
  createTodo,
};

const { initTable, db } = require("./models/db");
const app = require('./app');
const dotenv = require('dotenv');

if(process.env.NODE_ENV) {
	dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
} else {
	dotenv.config();
}

const { PORT, DATABASE_NAME } = process.env;

if (db) {
	console.log(initTable(db, DATABASE_NAME));
}

app.listen(PORT, () => console.log(`Server running on http://127.0.0.1:${PORT}`));

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/northwind.db');

module.exports = db;

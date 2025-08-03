
const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// List of tables (hardcoded for now, could be dynamic)
const tables = [
  'Categories',
  'CustomerCustomerDemo',
  'CustomerDemographics',
  'Customers',
  'Employees',
  'EmployeeTerritories',
  'Order Details',
  'Orders',
  'Products',
  'Regions',
  'Shippers',
  'Suppliers',
  'Territories'
];

// Home page: list all tables
app.get('/', (req, res) => {
  res.render('index', { tables });
});

// Table view: show all rows for a table (limit 100)
app.get('/:table', (req, res, next) => {
  const tableName = req.params.table;
  if (!tables.includes(tableName)) {
    return res.status(404).send('Table not found');
  }
  // Special case for "Order Details" (space in name)
  const sqlTable = tableName === 'Order Details' ? '"Order Details"' : tableName;
  db.all(`PRAGMA table_info(${sqlTable})`, (err, columns) => {
    if (err) return next(err);
    const colNames = columns.map(col => col.name);
    db.all(`SELECT * FROM ${sqlTable} LIMIT 100`, (err, rows) => {
      if (err) return next(err);
      res.render('table', { tableName, columns: colNames, rows });
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

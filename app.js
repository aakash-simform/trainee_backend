const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
require("dotenv").config();
app.use(bodyParser.json());
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.db_host, 
  user: process.env.db_username, 
  password: process.env.db_password,
  database: process.env.db_name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

app.get('/', (req, res) => {
  res.send('Hello, world! MySQL is connected.');
});

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users: ' + err.stack);
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(results);
  });
});

app.post('/add', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  connection.query(query, [name, email], (err, result) => {
    if (err) {
      console.error('Error inserting user: ' + err.stack);
      return res.status(500).json({ error: 'Error inserting user' });
    }
    res.status(201).json({
      message: 'User added successfully',
      userId: result.insertId
    });
  });
});

app.put('/update', (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ error: 'User ID and new name are required.' });
  }
  const query = 'UPDATE users SET name = ? WHERE id = ?';
  connection.query(query, [name, id], (err, result) => {
    if (err) {
      console.error('Error updating user: ' + err.stack);
      return res.status(500).json({ error: 'Error updating user' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      message: 'User updated successfully'
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

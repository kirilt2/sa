// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Create SQLite database
const db = new sqlite3.Database('users.db');
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, email TEXT, language TEXT)");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/register', (req, res) => {
  const { username, email, language } = req.body;

  // Insert user into database
  db.run("INSERT INTO users (username, email, language) VALUES (?, ?, ?)", [username, email, language], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }
    console.log(`New user registered with ID: ${this.lastID}`);
    res.send('Registration successful');
  });
});

app.get('/users', (req, res) => {
  // Retrieve all users from database
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }
    res.json(rows);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

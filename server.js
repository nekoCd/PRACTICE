// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (e.g., styles.css if you add it)
app.use(express.static(path.join(__dirname, 'public')));

// Route to render pro.ejs on root path
app.get('/', (req, res) => {
    res.render('pro');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});git
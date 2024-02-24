// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route handler for another URL
app.get('/about', (req, res) => {
  res.send('About page');
});

// Define a route handler for handling 404 errors
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Define a port to listen on
const port = process.env.PORT || 3000;

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

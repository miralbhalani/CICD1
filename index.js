const express = require('express');

const app = express();

// Define the GET /getusers endpoint
app.get('/getusers', (req, res) => {
  // In this example, we'll just return a static array of user objects
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  // Return the array of users as a JSON response
  res.json(users);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
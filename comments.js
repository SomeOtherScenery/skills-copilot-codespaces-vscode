// create a web server
const express = require('express');
const app = express();
const port = 3000;

// create a route to comments
app.get('/comments', (req, res) => {
  res.send('This is a page of comments');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// Run the server and visit http://localhost:3000/comments in your browser. You should see the message This is a page of comments.
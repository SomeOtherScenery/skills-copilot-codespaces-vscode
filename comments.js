// Create web server
const express = require('express');
const app = express();
app.get('/comments', (req, res) => {
    res.send('Comments');
});
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
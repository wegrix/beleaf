const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/beleaf'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/beleaf/index.html'));
});

// Start App
app.listen(process.env.PORT || 8080);

const express = require('express');
const path = require('path');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/beleafdesign'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/beleafdesign/index.html'));
});

// Start App
app.listen(process.env.PORT || 8080);

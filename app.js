const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname + '/static'));
app.use(express.static(path.join(__dirname, 'static')));
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
  res.render('CantDecide.html');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});




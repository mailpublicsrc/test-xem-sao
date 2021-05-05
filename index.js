const express = require('express');
const app = express();
const port = 4000;
app.get('/', function (req, res) {
  res.send('Hello World! successful ~~~~~');
});
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
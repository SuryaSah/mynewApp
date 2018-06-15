// server.js
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const app = express();

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname + '/dist/index.html'));
// });

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4200, function() {
  console.log('Listening on port ' + this.address().port); //Listening on port 8888
});
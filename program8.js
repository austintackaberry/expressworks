var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data) {
    var resString = data;
    var resObject = JSON.parse(resString);
    res.json(resObject);
  });
});

app.listen(process.argv[2]);

var express = require('express');
var app = express();
var crypto = require('crypto');


app.put('/message/:id', function(req, res){
  var hash = crypto.createHash('sha1', req.params.id)
                   .update(new Date().toDateString() + req.params.id)
                   .digest('hex');
  res.send(hash);
});

app.listen(process.argv[2]);

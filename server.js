var express = require ("express");
var app = express();

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000,function(err) {
	if (err) 
		return console.log("error"), process.exit(1);
	console.log ("ndevgram en el puerto 300");
})
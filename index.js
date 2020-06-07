var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request, response) {
	response.send('Hi! My name is Khang');
});

app.get('/user',function(request, response) {
	response.send('Hi! This is a user list');
});
// GET POST PUT DELETE PATCH

app.listen(port, function() {
	console.log('Example app listening at port' + port);
});
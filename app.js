// var express = require('express');
// var app = express();

// app.get('/', function (req, res){
// 	res.send('Hello World!');
// });

// app.listen(3000, function(){
// 	console.log('Example app listening on port 3000!');
// });

//   "scripts": {
//     "start": "node app.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   }

var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.send('Homepage');
});

app.get('/Login', function(req,res){
	res.send("Login Page");
});

app.get('/SignUp', function (req,res){
	res.send('SignUp Page')
});

app.get('/Major', function (req, res){
	res.send('Major');
});

app.post('/Major/createPost', function (req, res){
	res.send('Create a new post');
});

app.get('/Activities', function (req, res){
	res.send("Activities");
});

app.post('/Activities/createPost', function (req, res){
	res.send('Create a new post');
});

app.get('/Groups', function (req, res){
	res.send('Groups');
});

app.post('/Groups/createPost', function (req, res){
	res.send('Create a new post');
});


app.listen(3000, function () {
  console.log('CUNYPlus listening on port 3000!');
});

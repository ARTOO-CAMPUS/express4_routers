var express = require('express');
var app = express();
var router = express.Router();

app.get('/', function (req, res) {
	res.send('Benvenuto');
});

//UTILIZZO IL ROUTER CHE PUNTA A UTENTI
var utenti = require('./utenti.js');
app.use('/utenti', utenti);
//UTILIZZO IL ROUTER CHE PUNTA A POSTS

var posts = require('./posts.js');
app.use('/posts', posts);


//START DEL SERVER
app.listen(3000, function (req, res) {
	console.log("Server in esecuzione");
})
var express = require('express');

var router = express.Router();

// LISTA DEI POSTS
router.get('/', function (req, res) {
	res.send('Lista dei posts');
});

// DETTAGLIO DI UN POST
router.get('/:id', function (req, res) {
	res.send(`Detaglio di un post con id: ${req.params.id}`);
});

module.exports = router;
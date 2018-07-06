var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(req.body);
  db.query('SELECT * from users', function(err, result) {
      if (err) throw err;

      res.render("users", { title: 'User Listing', users : result });
    });
});

module.exports = router;

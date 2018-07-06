var express = require('express');
var router = express.Router();
var db = require('./db');
var md5 = require('md5');
//var bcrypt =require('../modules/bcrypt.js');

var bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign In' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign Up' });
});

//comments testing//

router.post('/save', function(req, res, next) {


	 let hash = bcrypt.hashSync(req.body.password, 10);
	 var json = {'fname':req.body.fname,'lname':req.body.lname,'email':req.body.email,'password':hash,'created':new Date()}

	 db.query('INSERT INTO users SET ?',json, function(err, result) {
      if (err) throw err;

      res.redirect("/home");
    });
});


//Welcome Page
router.get('/home', function(req, res, next) {
  res.render('welcome', { title: 'MyApp' });
});

module.exports = router;

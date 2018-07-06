var express = require('express');
var router = express.Router();
var db = require('./db');
var md5 = require('md5');
var bcrypt =require('../modules/bcrypt.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sign In' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Sign Up' });
});


router.post('/save', function(req, res, next) {
	
	var json = {'fname':req.body.fname,'lname':req.body.lname,'email':req.body.email,'password':bcrypt.encrypt(req.body.password),'created':new Date()}
	 db.query('INSERT INTO users SET ?', req.body, function(err, result) {
      if (err) throw err;

      res.redirect("/home");
    });
});

//Welcome Page
router.get('/home', function(req, res, next) {
  res.render('welcome', { title: 'MyApp' });
});

module.exports = router;

var express = require('express');
var bcrypt = require('bcrypt');

var exports=module.exports={};

exports.encrypt=function(password)
{
	bcrypt.hash(password, 10, function (err, hash, next){
	    if (err) {
	      return next(err);
	    }
	    password = hash;
	    return password;
	  }); 

};
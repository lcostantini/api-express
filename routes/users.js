var express = require('express');
var router = express.Router();
var User = require('../models/user')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if (err){
      res.send(err);
    }
    res.json(user)
  });
});

module.exports = router;

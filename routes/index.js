var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Querry' });
});

router.get('/profile', function(req, res) {
  res.render('profile', { title: 'Querry' });
});
module.exports = router;

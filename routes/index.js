var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Querry' });
});

router.get('/profile', function(req, res) {
  res.render('profile', { title: 'Querry' });
});

router.get('/form', function(req, res){
	res.render('demo',{});
});

router.get('/views/:name', function (req, res)
 { var name = req.params.name;
   res.render('views/' + name);
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('nosotros', { title: 'Sobre nosotros' });
});

module.exports = router;


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tarea Módulo 4 - Unidad 3' });
});

module.exports = router;

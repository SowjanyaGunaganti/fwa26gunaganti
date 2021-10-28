var express = require('express');
var router = express.Router();
var value = Math.round(Math.random()*100);

var x=Math.acosh(value); 
var y=Math.log1p(value) 
var z=Math.tan(value) 
var w=Math.sqrt(value) 

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send(`[Math.pow] applied to [${value}] is [${x}]<br>
  [Math.sign] applied to [${value}] is [${y}]<br>
  [Math.tanh] applied to [${value}] is [${z}]<br>
  [Math.trunc] applied to [${value}] is [${w}]<br>`); 
});

module.exports = router;

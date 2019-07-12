var express = require('express');
var router = express.Router();
var users=require('../controllers/users.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/user',users.adduser);
router.get('/user',users.alluser);
router.get('/user/:id',users.oneuser);
router.put('/user/:id',users.updateusre);
router.delete('/user/:id',users.deleteuser);
module.exports = router;

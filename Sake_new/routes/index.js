var express = require('express');
var router = express.Router();

var database = require('../core/databases/mysql');
db = new database();

// connection db = database();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ' Blog Kẻ Lắm Chuyện' });
});
// upload status file
//............................abs


router.post('/data_status', function(req, res, next){
  db.get_status(function(result){
    res.json({data: result})
  })
})

router.post('/data', function(req, res, next){
  db.get(function(result){
    res.json({data: result})
  })
})



module.exports = router;

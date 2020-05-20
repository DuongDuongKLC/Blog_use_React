var express = require('express');
var router = express.Router();
var fileUpload = require("express-fileupload");
/* GET users listing. */
router.use(fileUpload());

router.get('/', function(req, res, next) {
    res.render('uploads_data', {title : " Data Uploads "})
});

router.get('/akily', function(req, res, next) {
    db.get(function(result){
        res.render('akily' ,({data: result}))
    })
});

router.get('/data', function(req, res, next){
    db.get(function(result){
        res.json({data: result})
    })
})

module.exports = router;

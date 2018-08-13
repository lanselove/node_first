var express = require('express');
var dbHandel = require('../database/dbHandel');
var router = express.Router();

/* GET home page. */
router.route('/').get(function(req, res) {
    res.render('index');
}).post(function(req, res) {
    var col0 = dbHandel.getDbase('lanse').collection('dzh');
    // console.log(req.body.naizi);
    // col0.insert({name: '提流转', age: 13}, function(err) {
    //     console.log('插入成功');
    // });
    col0.find().toArray(function(err, data) {
        if (err) throw err;
        console.log(data);
        res.json({
            info: data
        });
    });
});

module.exports = router;

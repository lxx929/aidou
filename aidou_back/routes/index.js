var express = require('express');
var router = express.Router();

var Mongo = require('mongodb-curd');
var dbBase = 'test';
var dbColl = 'aidou';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/getData', function(req, res, next) {
    Mongo.find(dbBase, dbColl, {}, function(result) {
        if (!result) {
            res.send({ code: 0, mes: "查询失败" });
        } else {
            res.send({ code: 1, data: result, mes: "查询成功" });
        }
    });
});
router.get('/api/getDatas', function(req, res, next) {
    Mongo.find(dbBase, 'aidou1', {}, function(result) {
        if (!result) {
            res.send({ code: 0, mes: "查询失败" });
        } else {
            res.send({ code: 1, data: result, mes: "查询成功" });
        }
    });
});

module.exports = router;
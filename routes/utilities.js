var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('us/about', { title: 'Speedify' });
});

router.get('/downloads', function (req, res, next) {
    res.render('utils/download', { title: 'Speedify' });
});
router.get('/cacti', function (req, res, next) {
    res.render('utils/cacti', { title: 'Speedify' });
});
router.get('/crf', function (req, res, next) {
    res.render('utils/crf', { title: 'Speedify' });
});
router.get('/pay-bill', function (req, res, next) {
    res.render('utils/paybill', { title: 'Speedify' });
});

module.exports = router;

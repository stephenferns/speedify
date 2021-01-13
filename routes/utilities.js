var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('us/about', { title: 'Speedyfi' });
});

router.get('/downloads', function (req, res, next) {
    res.render('utils/download', { title: 'Speedyfi' });
});
router.get('/cacti', function (req, res, next) {
    res.render('utils/cacti', { title: 'Speedyfi' });
});
router.get('/crf', function (req, res, next) {
    res.render('utils/crf', { title: 'Speedyfi' });
});
router.get('/pay-bill', function (req, res, next) {
    res.render('utils/paybill', { title: 'Speedyfi' });
});

module.exports = router;

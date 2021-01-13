var express = require('express');
var router = express.Router();


router.get('/contact-us', function (req, res, next) {
    res.render('us/contact-us', { title: 'Speedyfi' });
});

router.get('/about-us', function (req, res, next) {
    res.render('us/about', { title: 'Speedyfi' });
});

router.get('/terms-conditions', function (req, res, next) {
    res.render('us/t-c', { title: 'Speedyfi' });
});

router.get('/privacy-policy', function (req, res, next) {
    res.render('us/privacy', { title: 'Speedyfi' });
});

router.get('/careers', function (req, res, next) {
    res.render('us/careers', { title: 'Speedyfi' });
});
module.exports = router;
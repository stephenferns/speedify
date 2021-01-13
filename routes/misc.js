var express = require('express');
var router = express.Router();


router.get('/contact-us', function (req, res, next) {
    res.render('us/contact-us', { title: 'Speedify' });
});

router.get('/about-us', function (req, res, next) {
    res.render('us/about', { title: 'Speedify' });
});

router.get('/terms-conditions', function (req, res, next) {
    res.render('us/t-c', { title: 'Speedify' });
});

router.get('/privacy-policy', function (req, res, next) {
    res.render('us/privacy', { title: 'Speedify' });
});

router.get('/careers', function (req, res, next) {
    res.render('us/careers', { title: 'Speedify' });
});
module.exports = router;
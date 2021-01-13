var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Speedify', promotion_plan: '300 Mbps', basic_plan1: '300 Mbps', basic_plan2: '300 Mbps', basic_plan3: '1 Gbps', basic_plan4: '1 Gbps' });
});

router.get("/triple-play", function (req, res, next) {
  res.render("triple-play", { title: 'Speedify' });
});

module.exports = router;

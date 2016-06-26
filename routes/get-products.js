var express = require('express');
var fs = require('fs');
var productRouter = require('./product-function');

var router = express.Router();

router.get('/', function (req, res, next) {
    fs.readFile('./product.json', 'UTF-8', function (err, data) {
        if (err) {

            return next(err);
        }
        var found = productRouter.getAll(JSON.parse(data));

        if (found) {
            res.status(200).json(found);
        } else {
            res.sendStatus(404);
        }
    });
});

module.exports = router;

var express = require('express');
var productRouter = require('./product-function');
var fs = require('fs');

var router = express.Router();

router.get('/:id', function (req, res, next) {
    fs.readFile('./product.json', 'UTF-8', function (err, data) {
        if (err) {

            return next(err);
        }
        var found = productRouter.get(JSON.parse(data), parseInt(req.params.id));

        if (found) {
            res.status(200).json(found);
        } else {
            res.sendStatus(404);
        }
    });
});

module.exports = router;

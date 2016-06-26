var express = require('express');
var fs = require('fs');
var judge = require('./product-judgement');
var productRouter = require('./product-function');

var router = express.Router();

router.put('/:id', function (req, res, next) {
    fs.readFile('./product.json', 'utf-8', function (err, data) {
        var product = req.body;
        var data = JSON.parse(data);

        if (err) {
            return next(err);
        }
        if (!judge.isExist(product)) {
            res.sendStatus(404);
        }
        else if (!judge.isRight(product)) {
            res.sendStatus(400);
        }
        else {
            var item = productRouter.update(parseInt(req.params.id), product, data);
            writeFile(res, data, item);
        }
    });
});

function writeFile(res, data, item, next) {
    fs.writeFile('./product.json', JSON.stringify(data), function (err) {
        if (err) {

            return next(err);
        }
        if (data === false) {
            res.sendStatus(404);
        }
        res.status(200).json(item);
    });
}

module.exports = router;
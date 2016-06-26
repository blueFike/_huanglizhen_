var express = require('express');
var fs = require('fs');
var productRouter = require('./product-function');

var router = express.Router();

router.delete('/:id', function (req, res, next) {
    fs.readFile('./product.json', 'utf-8', function (err, data) {
        if (err) {

            return next(err);
        }

        var data = productRouter.delete(JSON.parse(data), parseInt(req.params.id));

        writeFile(res, data);
    });
});

function writeFile(res, data) {
    fs.writeFile('./product.json', JSON.stringify(data), function (err) {
        if (err) {

            return next(err);
        }
        if (data === false) {
            res.sendStatus(404);
        }
        res.sendStatus(204);
    });
}

module.exports = router;
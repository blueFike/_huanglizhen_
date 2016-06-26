var express = require('express');
var router = express.Router();
var judge = require('./product-judgement');
var fs = require('fs');
var productRouter = require('./product-function');

router.post('/', function (req, res, next) {
    fs.readFile('./product.json', 'UTF-8', function (err, data) {
        var product = req.body;
        var data = JSON.parse(data);

        if (err){

            return next(err);
        }
        if (!judge.isExist(product)) {
            res.sendStatus(404);
        }
        else if (!judge.isRight(product)) {
            res.sendStatus(400);
        }
        else {
            buildProduct(product,data,res,next);
        }
    });
});

function buildProduct(product,data,res,next) {
    fs.readFile('./nextID.json', 'UTF-8', function (err, ID) {
        var ID = JSON.parse(ID);

        if (err) {

            return next(err);
        }
        ID.nextID++;

        var item = productRouter.create(ID.nextID,product);
        
        data.push(item);
        writeIDFile(ID.nextID);
        writeFile(res, data, item);
    });
}

function writeIDFile(ID) {
    fs.writeFile('./nextID.json', JSON.stringify({"nextID": ID}), 'UTF-8', function (err) {
        if (err) {

            return next(err);
        }
    });
}

function writeFile(res, data, item) {
    fs.writeFile('./product.json', JSON.stringify(data), 'UTF-8', function (err) {
        if (err) {

            return next(err);
        }
        res.status(201).json(item);
    });
}

module.exports = router;
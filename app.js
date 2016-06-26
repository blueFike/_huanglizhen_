var express = require('express');
var bodyParser = require('body-parser');
require('./createFile/product-information');
require('./createFile/nextID');

var app = express();

app.use(bodyParser.json());
app.use('/products', require('./routes/get-products'));
app.use('/products', require('./routes/get-product'));
app.use('/products', require('./routes/post-product'));
app.use('/products', require('./routes/put-product'));
app.use('/products', require('./routes/delete-product'));

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send('something error');
});

var server = app.listen(3000,function () {
    var port = server.address().port;
    console.log('listen on ' +port);
});

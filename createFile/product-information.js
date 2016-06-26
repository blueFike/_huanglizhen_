var fs = require('fs');

fs.stat('./product.json', function (err, stat) {
    if (stat && stat.isFile()) {

        return;
    }
    buildFile();
});

function buildFile() {
    fs.open('./product.json', 'w+', function (err, fd) {
        if (err) {

            return next(err);
        }
        fs.write(fd, "[]", 0, 'utf-8', function (err) {
            if (err) {

                return next(err);
            }
        });
    });
}

var fs = require('fs');

fs.stat('./nextID.json', function (err, stat) {
    if (stat && stat.isFile()) {

        return;
    }
    buildID();
});

function buildID() {
    fs.open('./nextID.json', 'a+', function (err) {
        if (err) {

            return next(err);
        }
        fs.writeFile('./nextID.json', JSON.stringify({"nextID": 0}), 'utf-8', function (err) {
            if (err) {

                return next(err);
            }
        });
    });
}

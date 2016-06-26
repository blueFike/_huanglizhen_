var _ = require('lodash');

module.exports = {
    getAll: function (data) {
        return data;
    },
    get: function (data, id) {
        return _.find(data, function (item) {
            return item.id === parseInt(id);
        });
    },
    create: function (ID,product) {
        return {
            id: ID,
            barcode: product.barcode,
            name: product.name,
            unit: product.unit,
            price: product.price
        };
    },
    update: function (id, product, data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data[i] = {
                    id: id,
                    barcode: product.barcode,
                    name: product.name,
                    unit: product.unit,
                    price: product.price
                };

                return data[i];
            }
        }

        return false;
    },
    delete: function (data, id) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data.splice(i, 1);

                return data;
            }
        }

        return false;
    }
};

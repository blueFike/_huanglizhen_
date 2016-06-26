module.exports = {
    isExist: function (product) {

        return (product.hasOwnProperty("barcode"))
            && (product.hasOwnProperty("name"))
            && (product.hasOwnProperty("unit"))
            && (product.hasOwnProperty("price"));
    },
    isRight: function (product) {

        return typeof(product.barcode) == 'string'
            && typeof(product.name) == "string"
            && typeof(product.unit) == "string"
            && typeof(product.price) == "number";
    }
};
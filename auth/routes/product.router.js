module.exports = function (app) {

    var products = require('../controllers/product.controller.js');

    app.get("/api/products",products.GetProductFromDb);
    app.get("/api/productById/:id",products.GetProductById);
    app.post("/api/products",products.addProduct);
    app.delete("/api/products/deleteById/:id",products.DeleteProductInfo);
    app.put("/api/products/updateById/:id",products.UpdateProductInfo);


}
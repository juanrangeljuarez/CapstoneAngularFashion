module.exports = function (app) {

    var products = require('../controllers/product.controller.js');

    app.get("/api/products",products.GetProductFromDb);
    app.post("/api/products",products.addProduct);
// router.get("/productInfoById/:id",ProductController.GetProductById);
// router.post("/storeProduct",ProductController.StoreProductInfo);
// router.put("/updateProduct",ProductController.UpdateProductInfo);
// router.delete("/deleteProductById/:id",ProductController.DeleteProductInfo);

}
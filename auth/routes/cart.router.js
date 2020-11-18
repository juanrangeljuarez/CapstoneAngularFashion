module.exports = function(app){
    var cart = require('../controllers/cart.controller.js');
    app.post("/api/cart",cart.addProductToCart);
    app.get("/api/cart",cart.GetCartFromDb);

}
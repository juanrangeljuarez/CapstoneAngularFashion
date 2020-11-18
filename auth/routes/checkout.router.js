module.exports = function (app) {

    var checkout  = require('../controllers/checkout.controller.js');

    app.get("/api/checkouts",checkout.GetCheckoutsFromDb);
    app.post("/api/checkouts",checkout.addCheckout);

}
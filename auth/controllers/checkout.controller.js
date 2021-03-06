const Checkout = require('../models/checkout.js');
const Product = require('../models/product.js');

//Retieve Product Details from Db
exports.GetCheckoutsFromDb = (req,res)=>{
    Checkout.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    });
}


exports.addCheckout = (req,res)=>{
    let checkout = new Checkout({    
                total:req.body.total,
                username: req.body.username
            });

    checkout.save((err,result)=> {
        if(err){
            res.json({"msg":"Error storing data"});
        } else{
            res.json({"msg":"Record stored successfully"});     
        }
        
    });
}
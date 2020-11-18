const Product = require('../models/product.js');
const Cart = require('../models/cart.js');

exports.GetCartFromDb = (req,res)=>{
    Cart.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    });
}

exports.addProductToCart = (req,res)=>{
    
    let cart = new Cart({    
                product:req.body.product,
                quantity: req.body.quantity
            });

    cart.save((err,result)=> {
        if(err){
            res.json({"msg":"Id must be unique"});
        } else{
            res.json({"msg":"Record stored successfully"});     
        }
        
    });
}
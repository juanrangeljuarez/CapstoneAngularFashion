const Company = require('../models/company.js');
const product = require('../models/product.js');
const Product = require('../models/product.js');

//Retieve Product Details from Db
exports.GetProductFromDb = (req,res)=>{
    Product.find({},(err,data)=>{
        if(err) throw err;
        res.json(data);
    });
}

exports.GetProductById = (req,res)=>{
    var idInfo = req.params.id;
    Product.find({_id:idInfo},(err,data)=>{
        if(err) throw err;
        res.json(data);
    })
}

exports.addProduct = (req,res)=>{
    var imageFile = req.body.image;
    imageFile = imageFile.substr(imageFile.lastIndexOf("\\")+1);


    let product = new Product({    //{pid:106,pname:"Computer",price:56000}
                code:req.body.code,
                name:req.body.name,
                details:req.body.details,
                image:imageFile,
                price:req.body.price,
                company: req.body.company
            });

    product.save((err,result)=> {
        if(err){
            res.json({"msg":"Id must be unique"});
        } else{
           // res.send("Record stored successfully in Db");
            res.json({"msg":"Record stored successfully"});     
        }
        
    });
}

exports.UpdateProductInfo = (req,res)=> {       //{pid:100,pname:"TV 65 inch",price:160000}
    var updateId = req.params.id;
    var updateCode = req.body.code;
    var updateName = req.body.name;
    var updateDetails = req.body.details;
    var imageFile = req.body.image;
    imageFile = imageFile.substr(imageFile.lastIndexOf("\\")+1);
    var updateImage = imageFile;
    var updatePrice = req.body.price;
    console.log("ID "+ updateId + " code " + updateCode + " name "+updateName + " details " + updateDetails);
    Product.update({_id:updateId},{$set:{code:updateCode,name:updateName, details:updateDetails, image: updateImage, price:updatePrice}},(err,result)=> {
        if(err) throw err;
        console.log(result);
       // res.send("Record updated...."+result);
        if(result.nModified>0){
            res.json({"msg":"REcord updated successfully"})
        }else {
            res.json({"msg":"REcord didn't update"})
        }
    })
}

exports.DeleteProductInfo = (req,res)=>{
    var deleteId = req.params.id;
    product.deleteOne({_id:deleteId},(err,result)=>{
        if(err) throw err;
        if(result.deletedCount>0){
           res.json({"msg":"Record deleted successfully..."});
        }else {
            res.json({"msg":"Record not present"});
        }
    })
}

//module.exports = {GetProductFromDb, GetProductById, StoreProductInfo, UpdateProductInfo, DeleteProductInfo}
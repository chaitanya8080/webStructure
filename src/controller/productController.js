

const { Router } = require("express");
const express = require("express");
const Product = require("../models/productModel");

const router = express.Router()


router.post("/", async (req,res)=>{
   try {
       const product = await Product.create(req.body);
       return res.status(200).send([{product, status:"ok"}])
   } catch (error) {
      return res.status(404).send(error.message)
   }
})

router.get("/",  async (req,res)=>{
    try {
       
        let page  = req.query.page ||1
        let size  = req.query.size ||10
        let sort = req.query.sort 

        const limit = parseInt(size)
        const skip = (page-1)*size;

        // const product = await Product.find({},{},{limit:limit,skip:skip});
        const product = await Product.find().limit(limit).skip(skip).sort({price:sort}).lean().exec();
        return res.status(200).send([{product, status:"ok"}])
    } catch (error) {
       return res.status(404).send(error.message)
    }
 })

// router.get("/",async (req,res)=>{
//     try {
//          const product = await Product.find().lean().exec();

//          return res.send(product);
//     } catch (error) {
//         return res.status(404).send(error.message)
//     }
// })




module.exports = router;
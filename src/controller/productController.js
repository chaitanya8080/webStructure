

const { Router } = require("express");
const express = require("express");
const Product = require("../models/productModel");

const router = express.Router()


router.post("/", async (req,res)=>{
   try {
       const product = await Product.create(req.body);
       return res.status(200).send({product, status:"ok"})
   } catch (error) {
      return res.status(404).send(error.message)
   }
})

router.get("/",  async (req,res)=>{
    try {
        const product = await Product.find().lean().exec();
        return res.status(200).send({product, status:"ok"})
    } catch (error) {
       return res.status(404).send(error.message)
    }
 })

module.exports = router;


const express = require("express");
// var cors = require('cors')
const connect = require("./src/config/db");



const productController=require("./src/controller/productController")


const app = express();
// app.use(cors({ origin:"*"}))


app.use(express.json());


app.use("/products", productController);



app.listen(6000, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 6000");
});

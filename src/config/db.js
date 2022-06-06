

//mongodb+srv://chaitanya:girase123@cluster0.dypcc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require("mongoose");


 const connect = ()=>{
      mongoose.connect("mongodb+srv://chaitanya:girase123@cluster0.dypcc.mongodb.net/webStructure?retryWrites=true&w=majority")
}
module.exports = connect;
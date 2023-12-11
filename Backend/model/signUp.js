const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://jibinpjohny:jibinpjohny@cluster0.5wy66gv.mongodb.net/ddb?retryWrites=true&w=majority")
.then(() => {
    console.log("DB connected");
})
.catch(err => console.log(err)); 
 

let sc = mongoose.Schema;
const docschema = new sc({
    uid:String,
    name:String,

});

var docmodel = mongoose.model("signUp",docschema)
module.exports = docmodel;
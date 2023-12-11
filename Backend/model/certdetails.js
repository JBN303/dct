const mongoose = require("mongoose")

mongoose.connect("")
.then(() =>{console.log("DB connected")
})
.catch(err=>console.log(err)); 

let sc = mongoose.Schema;
const certschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId, ref:'students'},
    qualification:String,
    certphoto:{
        data : Buffer,
        contentType:String,
    },
});

var certmodel = mongoose.model("Certificate",certschema)
module.exports = certmodel;
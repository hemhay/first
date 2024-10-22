const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/cornfield");

//check if DB is connected
connect.then(() => {
    console.log("Database connected successfuly");
})
.catch(() => {
    console.log("Database cannot be connected");
});

//create a schema
const LogininSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
});

//the collection
const collection = new mongoose.model("users",LogininSchema);

module.exports = collection;
const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");
const { name } = require("ejs");

const app = express();
//convert data to jason format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//use ejs as a view engine
app.set("view engine", "ejs");

//static file
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup",(req,res)=>{
    res.render("signup");
});

//regristration
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }

    //check if an account has been created
    const existinguser = await collection.findOne({email: data.email});

    if(existinguser){
        res.send("User already exists. please use another email")
    }else {
        const userdata = await collection.insertMany(data);
        console.log(userdata)
    }

    const userdata = await collection.insertMany(data);
    console.log(userdata);

})

const port = 5000;
app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
})
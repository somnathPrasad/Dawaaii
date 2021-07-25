const express = require("express")
const mongoose = require("mongoose")
const Cors = require("cors")
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())
app.use(Cors())


mongoose.connect("mongodb+srv://admin-somnath:9r4v8g24UuCN670s@cluster0.b0pdb.mongodb.net/DawaaiiDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true   
});

const productSchema = new mongoose.Schema({
    name:String,
    stores:[{
        storeName:String,
        price:Number,
    }]
});

const locationSchema = new mongoose.Schema({
    storeName:String,
    name:String,
    dateOfSetup:Date,
    noOfEmployees:Number
})

const Product = new mongoose.model("Product",productSchema);
const Location = new mongoose.model("Location",locationSchema);

app.get("/",function(req,res){
    res.send("Hello somu");
});

app.post("/product",function(req,res){
    product = req.body;
    Product.create(product, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});

app.get("/product",function(req,res){
    Product.find((err,data)=>{
        if(err){
            res.send(err)
        }else{
            products = data.map(product => {
                return (
                    {"name":product.name,"_id":product._id}
                )
            })
            res.send(products)
        }
    })
});

app.post("/locations",function(req,res){
    location = req.body;
    Location.create(location, (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.get("/locations",function(req,res){
    Location.find((err,data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})

app.listen(port, ()=> console.log("listining on port: "+port))
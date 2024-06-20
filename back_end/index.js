const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection
const mongoURI = "mongodb+srv://nethmade:Nethma99@cluster0.jcp1xxx.mongodb.net/thetealoft?retryWrites=true&w=majority";

console.log("Attempting to connect to MongoDB...");
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// API Creation
app.get("/", (req, res) => {
  console.log("Received GET request on /");
  res.send("Express App is Running");
});

// Image Storage 
const storage = multer.diskStorage({
  destination: './Uploads/images',
  filename: (req, file, cb) => {
    console.log("Processing image upload");
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const Uploads = multer({ storage: storage });

// Endpoint for images
app.use('/images', express.static('Uploads/images'));

app.post("/Uploads", Uploads.single('product'), (req, res) => {
  console.log("Received POST request on /Uploads");
  if (req.file) {
    console.log("File uploaded:", req.file.filename);
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
  } else {
    console.log("No file uploaded");
    res.status(400).json({ success: 0, message: "No file uploaded" });
  }
});

// Model for creating products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        defailt:true,
    },
})

// Add Product
app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }

    const product= new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        price:req.body.price,
    
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })

})
//API for Removing Product

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})

// Model for users

const Users =mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Endpoint for registering the user
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if (check) {
        return res.status(400).json({success:false,errors:"Existing user found with the same email address"})
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_tea');
    res.json({success:true,token})
})

//Endpoint for userlogin
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password===user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_tea');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Password is incorrect"});
        }   
    }
    else{
        res.json({success:false,errors:"Email Id is incorrect"});
    }
})

// Endpoint for bestsellers
app.get('/bestsellers',async(req,res)=>{
    let products = await Product.find({category:"Tea"});
    let best_sellers =products.slice(0,4);
    console.log("Best Sellers Fetched");
    res.send(best_sellers);

})

//Creating middleware to fetch user
const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})  
    }
    else{
        try {
            const data = jwt.verify(token,'secret_tea');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"Please authenticate using a vald token"})
        }
    }
}

// Endpoint for adding products to cart
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");

})

// Endpoint for removing products to cart
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId]-=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removd");

})

//Endpoint to get cartdata
app.post('/getcart',fetchUser,async(req,res)=>{
    console.log("GetCart");
    let userData =await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

// Start the server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error: " + error);
  }
});


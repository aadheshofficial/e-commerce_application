require("dotenv").config()
const express=require('express')
const cors=require('cors')
const morgan=require("morgan")
const cookieParser=require("cookie-parser")
const authRoutes=require("./routes/Auth")
const productRoutes=require("./routes/Product")
const orderRoutes=require("./routes/Order")
const cartRoutes=require("./routes/Cart")
const brandRoutes=require("./routes/Brand")
const categoryRoutes=require("./routes/Category")
const userRoutes=require("./routes/User")
const addressRoutes=require('./routes/Address')
const reviewRoutes=require("./routes/Review")
const wishlistRoutes=require("./routes/Wishlist")
const { connectToDB } = require("./database/db")
const Product = require("./models/Product"); // Ensure the correct path


// server init
const server=express()

// database connection
connectToDB()


// middlewares
server.use(cors({origin:process.env.ORIGIN,credentials:true,exposedHeaders:['X-Total-Count'],methods:['GET','POST','PATCH','DELETE']}))
server.use(express.json())
server.use(cookieParser())
server.use(morgan("tiny"))
server.use(express.urlencoded({ extended: true }));


// routeMiddleware
server.use("/auth",authRoutes)
server.use("/users",userRoutes)
server.use("/products",productRoutes)
server.use("/orders",orderRoutes)
server.use("/cart",cartRoutes)
server.use("/brands",brandRoutes)
server.use("/categories",categoryRoutes)
server.use("/address",addressRoutes)
server.use("/reviews",reviewRoutes)
server.use("/wishlist", wishlistRoutes)

server.set('view engine', 'ejs');
server.set('views', './views'); 


server.get("/",(req,res)=>{
    res.status(200).json({message:'running'})
})

//for the admin purpose
server.get("/add", (req, res) => {
    res.render("add_product")
})

server.post("/add-product", async (req, res) => {
    try {
        const { title, description, price, discountPercentage, category, brand, stockQuantity, thumbnail, images, isDeleted } = req.body;

        // Ensure images is an array (since HTML forms send arrays differently)
        const imagesArray = Array.isArray(images) ? images : [images];

        const newProduct = new Product({
            title,
            description,
            price,
            discountPercentage: discountPercentage || 0,
            category,
            brand,
            stockQuantity,
            thumbnail,
            images: imagesArray,
            isDeleted: isDeleted === "on", // Checkbox sends "on" when checked
        });

        // MongoDB will automatically generate createdAt and updatedAt timestamps
        await newProduct.save();

        res.render("product_success");
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).send("Internal Server Error");
    }
    // console.log(req.body)
    // res.send("completed")
});


const port=8000
server.listen(port,()=>{
    console.log('server [STARTED] ~ http://localhost:8000');
})
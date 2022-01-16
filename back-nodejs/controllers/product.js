const Product = require("../models/product");
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);
const {getIdCloudinary} = require("../helpers/getIdCloudinary");


const getProducts = async(req, res) => {

    const product = await Product.find({});
    res.status(200).json(product);

}

const getProductById = async(req, res) => {

    const {id} = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {

        res.status(400).json({
            msg: "ID invalido"
        });        
    }   
} ;

const saveProduct = async(req, res) => {

    const { name, price, description, img, talle=[], color=[] } = req.body;
    
    
    const info = { name, price, description, img };

    const product = await Product.create(info);
    
    product.talle = talle;    
    product.color = color

    const promises = req.files.file.map(async e => {
        const { tempFilePath } = e;
        const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
        product.img.push({ url: secure_url })
        return product;       
    })

    await Promise.all(promises)
    await product.save();
    res.status(201).json(product)
};

const updateProduct = async(req, res) => {
    const { id } = req.params;
    let productUpdate = req.body;

    const product = await Product.findByIdAndUpdate(id, productUpdate, {new: true});    
    
    res.status(200).json(product);
};

const deleteProduct = async(req, res) => {

    const { id } = req.params;
    
    const product = await Product.findByIdAndDelete(id);
    
    const arrayxd = product.img.map( e => cloudinary.uploader.destroy( getIdCloudinary(e.url) ) );    
     
    res.status(200).json({
        msg: "Producto eliminado"
    });
};

const listProductName = async(req, res) => {
    let name = req.query.name;
    //const { name } = req.params;
    //console.log(name);
    console.log(name);
    try {
        const product = await Product.find({ name: name });
        console.log(product);
        res.json({
            product
        });
    } catch (error) {
        msg = "opss.."
    }

}
const listProductPrice = async(req, res) => {
    let price = req.query.price;
    console.log(price);
    try {
        const product = await Product.find({ price: price });
        console.log(product);
        if (product.length) {
            res.json(
                product
            );
        } else {
            res.json(
                msg = "No se encuntra un producto con ese precio"
            );
        }

    } catch (error) {
        msg = "opss.."
    }
}
module.exports = {
    getProductById,
    saveProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    listProductName,
    listProductPrice
}
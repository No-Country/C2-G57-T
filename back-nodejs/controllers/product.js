const Product = require("../models/product");
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);
const { getIdCloudinary } = require("../helpers/getIdCloudinary");


const getProducts = async(req, res) => {
    const { category="", subcategory="", limit=20, from=0 } = req.query;   
    
    const categoryUC = category.toUpperCase();
    const subCategoryUC = subcategory.toUpperCase();

    if(subcategory===""){

        if(category===""){
            // buscar todos
            const [ total, products ] = await Promise.all([
                Product.countDocuments(),
                Product.find({})  
                    .populate("user", "name")            
                    .skip(Number(from))
                    .limit(Number(limit))        
            ]);
            return res.status(200).json({ total, products })
        }
        // buscar solo por categorias
        const [ total, products ] = await Promise.all([
            Product.countDocuments(),
            Product.find({ category: categoryUC })  
                .populate("user", "name")            
                .skip(Number(from))
                .limit(Number(limit))        
        ]);
        return res.status(200).json({ total, products })
    }else{
        if(category===""){
            // buscar solo por subcategoria
            const [ total, products ] = await Promise.all([
                Product.countDocuments(),
                Product.find({subcategory: subCategoryUC})  
                    .populate("user", "name")            
                    .skip(Number(from))
                    .limit(Number(limit))        
            ]);
            return res.status(200).json({ total, products })
        }
        // buscar por categorias y subcategorias
        const [ total, products ] = await Promise.all([
            Product.countDocuments(),
            Product.find({ $and: [{category: categoryUC}, {subcategory: subCategoryUC}], })  
                .populate("user", "name")            
                .skip(Number(from))
                .limit(Number(limit))        
        ]);
        return res.status(200).json({ total, products })
    }       
};

const getProductById = async(req, res) => {

    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product)

    } catch (error) {

        res.status(400).json({
            msg: "ID invalido"
        });
    }
};

const saveProduct = async(req, res) => {

    const { name, price, description, img, talle=[], color=[], user, category="", subcategory="" } = req.body;    
    const info = { name, price, description, img, user: req.user._id, category: category.toUpperCase(), subcategory: subcategory.toUpperCase(), color, talle };   
    
    const verifyProduct = await Product.findOne({ name: name });
    if (verifyProduct){
        return res.status(400).json({
            msg: `Producto ${verifyProduct.name} ya está registrado con ese nombre`
        })
    }

    const product = await Product.create(info);       
    let sampleFiles = req.files.file;    
    if(!(sampleFiles.constructor === Array)){
        sampleFiles = new Array(sampleFiles)        
    }
    
    const promises = sampleFiles.map(async e => {
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

    const arrayxd = product.img.map(e => cloudinary.uploader.destroy(getIdCloudinary(e.url)));

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
    getProducts,
    getProductById,    
    saveProduct,
    updateProduct,
    deleteProduct    
}
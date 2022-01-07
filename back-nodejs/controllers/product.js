const product = require("../models/product");
const Product = require("../models/product");

const saveProduct = async(req, res) => {

    const { name, price, description, img } = req.body;
    const product = new Product({ name, price, description, img });
    try {
        await product.save();
        res.json({
            product
        });
    } catch (error) {
        res.json({
            msg: "Product name already registered"
        });
    }
}
const listProduct = async(req, res) => {

    const product = await Product.find({});
    res.json({
        product
    });

}
const updateProduct = async(req, res) => {
    const { id } = req.params;
    let productUpdate = req.body;
    console.log(productUpdate);

    console.log(id);
    await product.updateOne({ _id: id }, {
        $set: {
            name: productUpdate.name,
            price: productUpdate.price,
            description: productUpdate.description,
            img: productUpdate.img
        }
    });
    res.json({
        productUpdate
    })

}
const deleteProduct = async(req, res) => {

    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    res.json(product);
}
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
    saveProduct,
    listProduct,
    updateProduct,
    deleteProduct,
    listProductName,
    listProductPrice
}
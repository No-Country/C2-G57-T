const Color = require("../models/color");
const saveProduct = async(req, res) => {

    const { name } = req.body;
    const color = new Color({ name });
    console.log(color);

    try {
        await color.save();
        res.status(201).json(color);
    } catch (error) {
        res.json({
            msg: error
                //msg: "Product name already registered"
        });
    }
};

const getProducts = async(req, res) => {

    const color = await Color.find({});
    res.status(200).json(color);

}
const updateProduct = async(req, res) => {
    const { id } = req.params;
    let productUpdate = req.body;

    const product = await Product.updateOne({ _id: id }, {
        $set: {
            name: productUpdate.name,
            price: productUpdate.price,
            description: productUpdate.description,
            img: productUpdate.img
        }
    });
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
    saveProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    listProductName,
    listProductPrice
}
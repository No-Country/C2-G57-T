
const User = require("../models/user");
const Product = require("../models/product");

const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);


const updateImageCloudinary = async(req, res)=> {

    const {id} = req.params;

    const model = await Product.findById(id);
    if(!model){
        return res.status(400).json({msg: ` Producto con el ID ${id} no existe`})
    }

    const {tempFilePath} = req.files.file;
    const {secure_url} = await cloudinary.uploader.upload( tempFilePath );
    model.img.push({url: secure_url});
    await model.save();
    res.json(model);

};


const deleteImageCloudinary = async(req, res) => {

    const { idProduct, idImage } = req.params;

    const product = await Product.findById(idProduct);
    const array1 = product.img;
    const imagenBuscada = array1.find( e => e.id === idImage);
    const url = imagenBuscada.url;
    const codeImage = getIdCloudinary(url);

    cloudinary.uploader.destroy(codeImage);

    const array2 = array1.filter( (el) => el.id !== idImage );
    const updatedImages = await Product.findByIdAndUpdate(product.id, {img: array2}, {new: true}); // new en true muestra la info nueva en la respuesta
    res.status(200).json(updatedImages);

} ;


module.exports = {
    updateImageCloudinary,
    deleteImageCloudinary
}


const User = require("../models/user");
const Product = require("../models/product");

const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL);


const updateImageCloudinary = async(req, res)=> {    

    const {id, collection} = req.params;
    let model;
    
    switch (collection) {
        case "users": // Aún no habilitado
            model = await User.findById(id);
            if(!model){
                return res.status(400).json({msg: ` User with ID ${id} doesn't exists`})
            }
        break;
        case "products":
            model = await Product.findById(id);
            if(!model){
                return res.status(400).json({msg: ` Product with ID ${id} doesn't exists`})
            }                   
        break;
        
        default:
            return res.status(500).json({msg: "Collecion no validapor el momento"});
    }  

    const {tempFilePath} = req.files.file;
    const {secure_url} = await cloudinary.uploader.upload( tempFilePath );     
    model.img.push({url: secure_url});
    await model.save();    
    res.json(model);

};


const deleteImageCloudinary = async(req, res) => {

    const {idImage, codeImage} = req.params;

    try {
        cloudinary.uploader.destroy(codeImage);
        
        const product = await Product.find({ img: {
            $elemMatch: {_id: idImage}
        } });
        /*const product = await Product.find({
            "img._id": idImage
        })*/ // Este funciona igual que el anterior       
        
        const array1 = product[0].img;            
        const array2 = array1.filter( (el) => el.id !== idImage );   
        
        const idProduct = product[0].id;          
        const updatedImages = await Product.findByIdAndUpdate(idProduct, {img: array2}, {new: true}); // new en true muestra la info nueva en la respuesta     
        res.json(updatedImages);        
        
    } catch (error) {
        res.json({
            msg: "Ese id de cloudinary no existe"
        })
    }
} ;


module.exports = {
    updateImageCloudinary,
    deleteImageCloudinary
}
const User = require("../models/user");

const userExists = async(id)=> {
    const user = await User.findById(id);
    if(!user){
        throw new Error(`ID: ${id} doesn't exist`)
    }
};

const emailExists = async(email="")=>{
    const email1 = await User.findOne({email});
    if ( email1 ){
        throw new Error(`Este email ya está en uso`)
    }
};

const isAdmin = async(req, res, next) => {
    if(!req.user.isAdmin){
        return res.status(403).json({msg: "El usuario no es administrador."});
    }
    next();
};

module.exports = {
    userExists,
    emailExists,
    isAdmin
}

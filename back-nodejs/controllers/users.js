const User = require("../models/user");
const bcrypt = require("bcrypt");
 

const postUser = async(req, res)=>{

    
    const {name, email, password} = req.body;
    const user = new User({name, email, password});
    
    // Encriptar la contraseña    
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync( password, salt );    
    
    
    // Guardar en BD
    // await user.save();
    res.json({               
        user        
    });
    
   
};


const deleteUser = async(req, res)=>{

    const {id} = req.params;
    res.json({
        msg: "delete user",
        id
    })

}



module.exports = {
    postUser,
    deleteUser
}


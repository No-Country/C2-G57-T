const User = require("../models/user");
const bcrypt = require("bcrypt");
const mail = require("../helpers/sendGrid");

const postUser = async(req, res) => {

    const { name, email, password } = req.body;
    const user = new User({ name, email, password });

    // Encriptar la contraseña    
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);
    ///envia email
    mail.sendMail(name, email);
    // Guardar en BD
    await user.save();


    res.json({
        user
    });

};

const putUser = async(req, res) => {

    const { id } = req.params;
    const { password, ...resto } = req.body;

    // TODO validar contra BD
    if (password) {
        // Encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync(password, salt);
    }
    
    const user = await User.findByIdAndUpdate(id, resto, {new: true});
    res.status(200).json(user);
};


const deleteUser = async(req, res) => {

    const { id } = req.params;

    // Eliminacion física
    const user = await User.findByIdAndDelete(id);

    res.json(user);
}

module.exports = {
    postUser,
    putUser,
    deleteUser
}
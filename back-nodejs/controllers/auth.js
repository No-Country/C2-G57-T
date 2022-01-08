const User = require("../models/user");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async (req, res) => {

  console.log('req', req.body )



  const { email, password } = req.body;

  try {
    // Validaciones en la DB
    const user = await User.findOne({ email });

    console.log('user', user )

    if (!user) {
      return res.status(400).json({
        msg: "User or password incorrect",
      });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "User or password incorrect",
      });
    }

    // generar el JWT
    const token = await generarJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Something went wrong",
    });
  }
};

module.exports = {
  login,
};

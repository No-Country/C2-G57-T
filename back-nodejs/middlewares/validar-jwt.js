const jwt = require("jsonwebtoken");
const User = require("../models/user");

const validarJWT = async (req, res, next) => {
  console.log('token', req)
  const token = req.header("token");    

  if (!token) {
    return res.status(401).json({
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = User.findById(uid);
    if (!user) {
      return res.status(401).json({
        msg: "Token Invalido - El usuario no existe",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

module.exports = {
  validarJWT,
};

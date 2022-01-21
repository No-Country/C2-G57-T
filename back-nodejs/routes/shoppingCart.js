const { Router } = require("express");
const { check } = require("express-validator");
const { saveshoppingCart, listSaveshoppingCart, listByUserSaveshoppingCart, addProduc, deleteProduc, deleteProducAll } = require("../controllers/shoppingCart");
const { isAdmin } = require("../middlewares/db-validators");
const { fileValidation } = require("../middlewares/fileValidation");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");

const router = Router();
//añadir producto.Una lista entera
router.post("/", saveshoppingCart);
//No tiene utilida.
router.get("/all", listSaveshoppingCart);
//devuelve lista de productos guardaso por id de user: enviaridUser como parametro
router.get("/user", listByUserSaveshoppingCart);
//actualiza por id de carro mas un body de producto //sobreescribe , no añade por unidad
router.put("/:id", addProduc);
//elimina por id de carro con un body de producto de preferencia el id
router.delete("/:id", deleteProduc);
//limpia carrito
router.get("/clear", deleteProducAll);


module.exports = router;
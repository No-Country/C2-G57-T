const { Router } = require("express");
const { check } = require("express-validator");
const { saveProduct, getProducts, updateProduct, deleteProduct, listProductName, listProductPrice, getProductById } = require("../controllers/product");
const { fileValidation } = require("../middlewares/fileValidation");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");

const router = Router();

router.get("/:id", getProductById);

router.get("/", getProducts);

router.post("/", [
    validarJWT,
    check("name", "Name es requerido").notEmpty(),
    check("price", "Price es requerido").notEmpty(),
    check("description", "Description es requerido").notEmpty(),
    validations
], saveProduct);

router.put("/:id", updateProduct);

router.delete("/:id", [
    validarJWT,
    validations
],deleteProduct);


module.exports = router;
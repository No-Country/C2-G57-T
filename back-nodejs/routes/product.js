const { Router } = require("express");
const { check } = require("express-validator");
const { saveProduct, getProducts, updateProduct, deleteProduct, getProductById, getProductsDestacados, getProductsByDiscount } = require("../controllers/product");
const { isAdmin } = require("../middlewares/db-validators");
const { fileValidation } = require("../middlewares/fileValidation");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");

const router = Router();

router.get("/", getProducts);

router.get("/destacados", getProductsDestacados)

router.get("/discount", getProductsByDiscount);

router.get("/:id", getProductById);


router.post("/", [
    validarJWT,
    fileValidation,
    isAdmin,
    check("name", "Name es requerido").notEmpty(),
    check("price", "Price es requerido").notEmpty(),
    check("description", "Description es requerido").notEmpty(),
    validations
], saveProduct);

router.put("/:id", [
    validarJWT,
    isAdmin,
    validations
], updateProduct);

router.delete("/:id", [
    validarJWT,
    isAdmin,
    validations
],deleteProduct);


module.exports = router;
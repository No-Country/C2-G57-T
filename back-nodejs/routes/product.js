const { Router } = require("express");
const { saveProduct, getProducts, updateProduct, deleteProduct, listProductName, listProductPrice, getProductById } = require("../controllers/product");
const { fileValidation } = require("../middlewares/fileValidation");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");

const router = Router();


router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", [
    validarJWT,    
    validations
], saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// Esto aún no habilitado
router.get("/name", listProductName);
router.get("/price", listProductPrice);



module.exports = router;
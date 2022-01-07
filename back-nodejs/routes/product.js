const { Router } = require("express");
const { saveProduct, listProduct, updateProduct, deleteProduct, listProductName, listProductPrice } = require("../controllers/product");

const router = Router();


router.post("/", saveProduct);
router.get("/", listProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/name", listProductName);
router.get("/price", listProductPrice);



module.exports = router;
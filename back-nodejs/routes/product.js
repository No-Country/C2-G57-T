const { Router } = require("express");
const { saveProduct, getProduct, getProducts, updateProduct, deleteProduct, listProductName, listProductPrice } = require("../controllers/product");

const router = Router();


router.get("/", getProducts);
router.post("/", saveProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/name", listProductName);
router.get("/price", listProductPrice);



module.exports = router;
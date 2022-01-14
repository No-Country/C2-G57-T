const { Router } = require("express");
const { saveProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/color");

const router = Router();


router.get("/", getProducts);
router.post("/", saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);





module.exports = router;
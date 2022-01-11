
const { Router } = require("express");
const { updateImageCloudinary, deleteImageCloudinary } = require("../controllers/uploads");
const { check } = require("express-validator");
const { fileValidation } = require("../middlewares/fileValidation");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");

const router = Router();



router.put("/:collection/:id", [
    validarJWT,
    fileValidation,
    check("id", "Id must be a Mongo ID").isMongoId(),
    validations
], updateImageCloudinary);

router.delete("/:idImage/:codeImage", deleteImageCloudinary);


module.exports = router;

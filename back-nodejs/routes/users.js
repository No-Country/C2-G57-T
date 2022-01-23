const { Router } = require("express");
const { postUser, deleteUser, putUser, getUserById, changePassword } = require("../controllers/users");

const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");
const { emailExists, userExists } = require("../middlewares/db-validators");


const router = Router();

router.get("/:id", [
    check("id", "ID inválido").isMongoId(),
    validations
], getUserById);

router.post("/", [
    check("name", "name es requerido").notEmpty(),
    check("email", "email es requerido").notEmpty(),
    check("password", "password es requerido").notEmpty(),
    check("email").custom(emailExists),
    validations  
], postUser);

router.put("/password/:id", [
    validarJWT,
    check("currentPassword", "Contraseña actual es requerida").notEmpty(),
    check("newPassword", "nueva contraseña es requerida").notEmpty(),
    validations
], changePassword);

router.put("/:id", [
    validarJWT,
    check("id", "ID inválido").isMongoId(),    
    validations
], putUser);


router.delete("/:id", [
    validarJWT,
    check("id", "ID inválido").isMongoId(),
    check("id").custom(userExists),
    validations
],deleteUser);



module.exports = router; 

const { Router } = require("express");
const { postUser, deleteUser, putUser } = require("../controllers/users");

const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const { validations } = require("../middlewares/validations");
const { emailExists, userExists } = require("../middlewares/db-validators");

const router = Router();

router.post(
  "/",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Email is required").notEmpty(),
    check("password", "Password is required").notEmpty(),
    check("email").custom(emailExists),
    validations,
  ],
  postUser
);

router.put(
  "/:id",
  [validarJWT, check("id", "Invalid ID").isMongoId(), validations],
  putUser
);

router.delete(
  "/:id",
  [
    validarJWT,
    check("id", "Invalid ID").isMongoId(),
    check("id").custom(userExists),
    validations,
  ],
  deleteUser
);

module.exports = router;

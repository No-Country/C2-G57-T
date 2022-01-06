
const { Router } = require("express");
const { postUser, deleteUser, putUser } = require("../controllers/users");

const router = Router();

router.post("/", postUser);

router.put("/:id", putUser);

router.delete("/:id", deleteUser);



module.exports = router; 
